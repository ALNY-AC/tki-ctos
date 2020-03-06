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
            <el-option label="启用" :value="1"></el-option>
            <el-option label="禁用" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="task_name" width="150" label="任务名称"></el-table-column>
        <el-table-column align="center" label="任务类别">
          <template slot-scope="scope">
            <span v-if="scope.row.task_type==1">翻译</span>
            <span v-if="scope.row.task_type==2">软件</span>
            <span v-if="scope.row.task_type==3">设计</span>
            <span v-if="scope.row.task_type==4">其他</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="任务进度">
          <template slot-scope="scope">
            <span v-if="scope.row.task_state==1">待支付</span>
            <span v-if="scope.row.task_state==2">进行中</span>
            <span v-if="scope.row.task_state==3">终止</span>
            <span v-if="scope.row.task_state==4">完成</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="审核进度">
          <template slot-scope="scope">
            <span v-if="scope.row.state==0">待审核</span>
            <span v-if="scope.row.state==1">通过</span>
            <span v-if="scope.row.state==2">未通过</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="price" label="任务价格"></el-table-column>
        <el-table-column align="center" prop="info" width="150" label="任务信息"></el-table-column>
        <el-table-column align="center" prop label="所在地">
          <template slot-scope="scope">
            <span>{{scope.row.p}}{{scope.row.c}}{{scope.row.a}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="详细地址"></el-table-column>

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
        <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="text"
              v-if="scope.row.is_top == 0 &&scope.row.state==1"
              @click="remd(scope.row.id)"
            >推荐</el-button>
            <el-button
              type="text"
              @click="$router.push(`/house/info?id=${scope.row.id}`)"
            >查看详情</el-button>
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