<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="分类列表"></el-page-header>
      <el-divider></el-divider>
      <el-button type="primary" style="margin-bottom:20px" @click="$router.push(`/class/edit`)">添加分类</el-button>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="center" prop="name" label="分类名称"></el-table-column>
        <el-table-column align="center" label="图标" prop="icon">
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="$getUrl(scope.row.icon)"
              fit="fit"></el-image>
            {{scope.icon}}
          </template>
        </el-table-column>

         <el-table-column align="center" label="预估金额" prop="price">
          <template slot-scope="scope">
            {{scope.row.price}}
          </template>
        </el-table-column>

        <el-table-column fixed="right" align="center" label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/class/edit?id=${scope.row.id}`)">编辑</el-button>
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