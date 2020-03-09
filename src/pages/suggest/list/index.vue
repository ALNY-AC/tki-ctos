<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="投诉列表"></el-page-header>
      <el-divider></el-divider>

      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="text" width="150" label="投诉与建议"></el-table-column>
        <el-table-column align="center" label="审核状态">
          <template slot-scope="scope">
            <span v-if="scope.row.state==0">待处理</span>
            <span v-if="scope.row.state==1">已处理</span>
            <span v-if="scope.row.state==2">其他</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="remarks" label="备注"></el-table-column>
        <el-table-column align="center" prop="add_time" width="200" label="发布时间"></el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="$router.push(`/suggest/edit?id=${scope.row.id}`)"
            >编辑</el-button>
            <el-button
              type="text"
              @click="$router.push(`/suggest/info?id=${scope.row.id}`)"
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