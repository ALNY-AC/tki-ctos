<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="账户列表"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent inline>
        <!-- <el-form-item>
          <el-button @click="$router.push('/user/edit')">新增账户</el-button>
        </el-form-item>-->
        <div class="float-right">
          <el-form-item label="用户昵称：">
            <el-input
              style="width:200px"
              v-model="query.name"
              placeholder="请输入用户昵称"
              @keydown.enter.native="update"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="角色状态：">
            <el-select style="width:80px" v-model="query.state" @change="update" placeholder="请选择">
              <el-option label="全部" value></el-option>
              <el-option label="禁用" :value="0"></el-option>
              <el-option label="正常" :value="1"></el-option>
            </el-select>
          </el-form-item>-->

          <el-form-item label>
            <el-button @click="update">筛选</el-button>
          </el-form-item>

          <!-- <el-form-item label>
            <el-button @click="dels" type="danger">批量删除</el-button>
          </el-form-item>-->
        </div>
      </el-form>
      <el-table
        @selection-change="handleSelectionChange"
        :data="list"
        row-key="id"
        stripe
        style="width: 100%"
        border
      >
        <el-table-column align="center" prop="head_img" label="用户头像" width="80">
          <template slot-scope="scope">
            <div>
              <el-image style="width:60px; height:60px" :src="$getUrl(scope.row.head_img)"></el-image>
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