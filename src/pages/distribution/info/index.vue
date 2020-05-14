<template>
  <div id="info">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="分销号详情"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent label-width="150px" size="small" v-if="form">
        <el-form-item label="分销号昵称：">
          <span>{{form.name}}</span>
        </el-form-item>

        <el-form-item label="二维码：">
          <!-- <el-image style="width:100px; height:100px" :src="form.head_img"></el-image> -->
          <div id="qrcode" ref="Qrcode"></div>
        </el-form-item>
        <el-form-item label="已拉用户总数">
          <span>{{total}}</span>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never" style="margin-top:20px">
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="center" prop="head_img" label="用户头像" width="80">
          <template slot-scope="scope">
            <div>
              <el-image style="width:60px; height:60px" :src="scope.row.head_img"></el-image>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="用户昵称"></el-table-column>
        <el-table-column align="center" label="性别">
          <template slot-scope="scope">
            <span v-if="scope.row.gender===0">女</span>
            <span v-if="scope.row.gender===1">男</span>
            <span v-if="scope.row.gender===null">未知</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="add_time" label="注册时间"></el-table-column>
        <el-table-column align="center" label="操作" width="130">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="$router.push({path:`/user/info`,query:{id:scope.row.id}})"
            >查看</el-button>
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