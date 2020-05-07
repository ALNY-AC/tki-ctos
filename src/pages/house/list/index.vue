<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="任务列表"></el-page-header>
      <el-divider></el-divider>
      <el-form inline @submit.native.prevent>
        <el-form-item label="名称：">
          <el-input
            style="width:200px"
            v-model="query.task_name"
            placeholder="任务名称"
            @keydown.enter.native="update"
          ></el-input>
        </el-form-item>
        <el-form-item label="任务类型">
          <el-select v-model="query.task_type" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="翻译" :value="1"></el-option>
            <el-option label="软件" :value="2"></el-option>
            <el-option label="设计" :value="3"></el-option>
            <el-option label="其他" :value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="任务进度：">
          <el-select v-model="query.task_state" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="申请中" :value="1"></el-option>
            <el-option label="进行中" :value="2"></el-option>
            <el-option label="中止" :value="3"></el-option>
            <el-option label="完成" :value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="上下架状态：">
          <el-select v-model="query.is_up" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="启用" :value="1"></el-option>
            <el-option label="禁用" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态：">
          <el-select v-model="query.state" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="待审核" :value="0"></el-option>
            <el-option label="通过" :value="1"></el-option>
            <el-option label="未通过" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>




      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="center" prop="task_name" label="任务名称"></el-table-column>
        <el-table-column align="center" label="发布人" width="100">
          <template slot-scope="scope">
            <!-- <span>{{}}</span> -->
            <el-image
              style="width: 50px; height: 50px"
              :src="$getUrl(scope.row.userInfo['head_img'])"
              :fit="fit"></el-image>
            <br>
            <span>{{scope.row.userInfo['name']}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop label="所在地" width="200">
          <template slot-scope="scope">
            <span>{{scope.row.p|areaToStr}}{{scope.row.c|areaToStr}}{{scope.row.a|areaToStr}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="address" label="详细地址"></el-table-column>
        <el-table-column align="center" label="任务类别" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.task_type==1">翻译</span>
            <span v-if="scope.row.task_type==2">软件</span>
            <span v-if="scope.row.task_type==3">设计</span>
            <span v-if="scope.row.task_type==4">其他</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="price" label="任务价格" width="80"></el-table-column>
        <el-table-column align="center" label="任务进度" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.task_state==1" class="wait" >待支付</span>
            <span v-if="scope.row.task_state==2" class="wait" >进行中</span>
            <span v-if="scope.row.task_state==3" class="over">终止</span>
            <span v-if="scope.row.task_state==4" class="over">完成</span>
            <span v-if="scope.row.task_state==0" class="over">已支付</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="审核进度" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.state==0" class="wait-master" >待审核</span>
            <span v-if="scope.row.state==1" class="over" >通过</span>
            <span v-if="scope.row.state==2" class="end" >未通过</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="add_time" width="200" label="发布时间"></el-table-column>
        <el-table-column align="center" label="状态" width="80">
          <template slot-scope="scope">
            <div>
              <el-switch
                v-model="scope.row.is_up"
                @change="save(scope.row)"
                :active-value="1"
                :inactive-value="0"
              ></el-switch>
            </div>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="是否推荐" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              v-if="scope.row.is_top == 1"
              @click="remd(scope.row.id)"
            >推荐</el-button>
            <span v-if="scope.row.is_top==0">已推荐</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/house/info?id=${scope.row.id}`)">查看</el-button>
            <el-button type="text" @click="$router.push(`/house/pushUsers?id=${scope.row.id}`)">推送</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin:20px 0"
        :current-page.sync="query.page"
        :page-sizes="[5,10, 20, 30, 40]"
        :page-size.sync="query.page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>