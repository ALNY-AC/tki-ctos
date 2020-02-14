<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="订单列表"></el-page-header>
      <el-divider></el-divider>
      <el-form inline @submit.native.prevent>
        <!-- <el-form-item>
          <el-button icon="el-icon-plus" @click="$router.push('/house/edit')">新增房源</el-button>
        </el-form-item>-->
        <!-- <el-form-item label="名称：">
          <el-input
            style="width:200px"
            v-model="query.title"
            placeholder="房源名称"
            @keydown.enter.native="update"
          ></el-input>
        </el-form-item>-->

        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" stripe style="width: 100%" border>
        <el-table-column align="left" prop="openid" width="240" label="订单号"></el-table-column>
        <el-table-column align="center" prop width="150" label="用户昵称">
          <template slot-scope="scope">
            <span>{{scope.row.name ? scope.row.name : ''}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="100" label="用户头像">
          <template slot-scope="scope">
            <el-image
              v-if="scope.row.head_img"
              style="width:60px; height:60px"
              :src="scope.row.head_img"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" prop label="付款金额">
          <template slot-scope="scope">
            <span>{{scope.row.price}}元</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="购买服务">
          <template slot-scope="scope">
            <span v-if="scope.row.data.count&&!scope.row.data.time">次数服务</span>
            <span v-if="!scope.row.data.count&&scope.row.data.time">时长服务</span>
            <span v-if="scope.row.data.count&&scope.row.data.time">会员套餐</span>
            <span></span>
            <span></span>
          </template>
        </el-table-column>
        <!-- 
        <el-table-column align="center" prop="towards" width="100" label="向阳面"></el-table-column>
        <el-table-column align="center" prop="area" width="120" label="房间面积">
          <template slot-scope="scope">
            <span>{{scope.row.area}}m</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="fill" width="100" label="装修类型"></el-table-column>
        <el-table-column align="center" prop="add_time" width="200" label="发布时间"></el-table-column>
        <el-table-column align="center" prop="state" label="状态" width="80">
          <template slot-scope="scope">
            <div>
              <el-switch
                v-model="scope.row.state"
                @change="save(scope.row)"
                :active-value="1"
                :inactive-value="0"
              ></el-switch>
            </div>
          </template>
        </el-table-column>-->
        <!-- <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/house/edit?id=${scope.row.id}`)">编辑</el-button>
            <el-button type="text" v-if="scope.row.data_state == 1" @click="frozen(scope.row.id)">禁用</el-button>
            <el-button type="text" v-else @click="start(scope.row.id)">启用</el-button>
            <el-button type="text" @click="remd(scope.row.id)">推荐</el-button>
            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>-->
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