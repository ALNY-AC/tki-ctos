<template>
  <div id="list">
    <el-card shadow="never" header="分销号列表">
      <el-form inline @submit.native.prevent>
        <el-form-item>
          <el-button icon="el-icon-plus" @click="add">新增分销号</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="name" label="分销号名称"></el-table-column>

        <el-table-column align="center" prop="add_time" width="170" label="发布时间"></el-table-column>

        <!-- <el-table-column align="center" prop="first_img" label="分销号二维码" width="80">
          <template slot-scope="scope">
            <div>
              <el-image style="width:60px; height:60px" :src="$getUrl(scope.row.first_img)"></el-image>
            </div>
          </template>
        </el-table-column> -->

        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/distribution/info?fork_id=${scope.row.id}`)">查看</el-button>
            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
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