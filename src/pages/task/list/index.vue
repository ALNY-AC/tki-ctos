<template>
  <div id="list">
    <el-card shadow="never" header="任务管理" style="margin-bottom:20px">
      <el-form label-width="120px">
        <el-form-item label="任务状态：">
          <el-radio-group @change="update" v-model="query.task_state" size="small">
            <el-radio label border>全部</el-radio>
            <el-radio :label="1" border>待支付</el-radio>
            <el-radio :label="2" border>招募中</el-radio>
            <el-radio :label="3" border>进行中</el-radio>
            <el-radio :label="4" border>已完成</el-radio>
            <el-radio :label="5" border>申诉中</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上下架：">
          <el-radio-group @change="update" v-model="query.is_up" size="small">
            <el-radio label border>全部</el-radio>
            <el-radio :label="1" border>上架</el-radio>
            <el-radio :label="0" border>下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="推荐：">
          <el-radio-group @change="update" v-model="query.is_top" size="small">
            <el-radio label border>全部</el-radio>
            <el-radio :label="1" border>已推荐</el-radio>
            <el-radio :label="0" border>未推荐</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类：">
          <el-radio-group @change="update" v-model="query.task_type" size="small">
            <el-radio label border>全部</el-radio>
            <el-radio
              style="margin-bottom:10px"
              :label="item.id"
              border
              v-for="item in classList"
              :key="item.id"
            >{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table size="mini" :data="list" row-key="id" style="width: 100%" border>
        <el-table-column align="center" label="发布人" width="80">
          <template slot-scope="scope" v-if="scope.row.userInfo">
            <el-avatar shape="square" :size="50" :src="$getUrl(scope.row.userInfo.head_img)"></el-avatar>
            <div class="user-name">
              <i v-if="scope.row.userInfo.gender==0" class="el-icon-female"></i>
              <i v-if="scope.row.userInfo.gender==1" class="el-icon-male"></i>
              <span>{{scope.row.userInfo.name}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" prop label="任务信息" width="200">
          <template slot-scope="scope">
            <div class="task-title">{{scope.row.task_name}}</div>
            <div class="task-location">
              <i class="el-icon-map-location"></i>
              {{scope.row.p|areaToStr}}{{scope.row.c|areaToStr}}{{scope.row.a|areaToStr}}{{scope.row.address}}
            </div>
            <div class="task-class">
              <i class="el-icon-menu"></i>
              <span>{{class_name(scope.row.task_type )}}</span>
            </div>
          </template>
        </el-table-column>
        <!-- 
        <el-table-column align="center" prop="price" label="任务价格" width="80"></el-table-column>
        <el-table-column align="center" label="任务进度" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.task_state==1" class="wait">待支付</span>
            <span v-if="scope.row.task_state==2" class="wait">进行中</span>
            <span v-if="scope.row.task_state==3" class="over">终止</span>
            <span v-if="scope.row.task_state==4" class="over">完成</span>
            <span v-if="scope.row.task_state==0" class="over">已支付</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="审核进度" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.state==0" class="wait-master">待审核</span>
            <span v-if="scope.row.state==1" class="over">通过</span>
            <span v-if="scope.row.state==2" class="end">未通过</span>
          </template>
        </el-table-column>-->

        <el-table-column label="任务状态" min-width="450">
          <template slot-scope="scope">
            <div class="task-list">
              <div
                @click="updateState(scope.row,1,'待支付')"
                :class="['task-item',{'active':scope.row.task_state==1}]"
              >待支付</div>
              <i class="el-icon-right task-right"></i>
              <div
                @click="updateState(scope.row,2,'招募中')"
                :class="['task-item',{'active':scope.row.task_state==2}]"
              >招募中</div>
              <i class="el-icon-right task-right"></i>
              <div
                @click="updateState(scope.row,3,'进行中')"
                :class="['task-item',{'active':scope.row.task_state==3}]"
              >进行中</div>
              <i class="el-icon-right task-right"></i>
              <div
                @click="updateState(scope.row,4,'完成')"
                :class="['task-item',{'active':scope.row.task_state==4}]"
              >已完成</div>
              <i class="el-icon-right task-right"></i>
              <div
                @click="updateState(scope.row,5,'申诉')"
                :class="['task-item',{'active bg-red':scope.row.task_state==5}]"
              >申诉</div>
            </div>
            <div
              v-if="scope.row.stop_remark && scope.row.task_state==5"
              style="color:#f00;padding:10px 0"
            >申诉理由：{{scope.row.stop_remark}}</div>
          </template>
        </el-table-column>

        <el-table-column align="center" prop="add_time" width="170" label="发布时间"></el-table-column>
        <el-table-column fixed="right" align="center" label="上下架" width="80">
          <template slot-scope="scope">
            <div>
              <el-switch
                v-model="scope.row.is_up"
                @change="save({id:scope.row.id,is_up:scope.row.is_up})"
                :active-value="1"
                :inactive-value="0"
              ></el-switch>
            </div>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="是否推荐" width="100">
          <template slot-scope="scope">
            <!-- <el-button type="text" v-if="scope.row.is_top == 1" @click="remd(scope.row.id)">推荐</el-button>
            <span v-if="scope.row.is_top==0">已推荐</span>-->
            <el-switch
              v-model="scope.row.is_top"
              @change="save({id:scope.row.id,is_top:scope.row.is_top})"
              :active-value="1"
              :inactive-value="0"
            ></el-switch>
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/house/info?id=${scope.row.id}`)">查看</el-button>
            <!-- <el-button
              type="text"
              v-if="scope.row.task_state != 6"
              @click="$router.push(`/house/pushUsers?id=${scope.row.id}`)"
            >推送</el-button>-->
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