<template>
  <div id="list">
    <el-card shadow="never" header="文章列表">
      <el-form inline @submit.native.prevent>
        <el-form-item>
          <el-button icon="el-icon-plus" @click="addarticle">新增文章</el-button>
        </el-form-item>

        <el-form-item label="标题：">
          <el-input style="width:200px" v-model="query.name" placeholder="文章标题" @keydown.enter.native="update"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select v-model="query.type" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="文章" :value="1"></el-option>
            <el-option label="公众号" :value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-select v-model="query.is_up" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="上架" :value="1"></el-option>
            <el-option label="下架" :value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="title" label="文章标题"></el-table-column>

        <el-table-column align="center" prop="add_time" width="170" label="发布时间"></el-table-column>

        <el-table-column align="center" prop="is_up" label="上下架" width="80">
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

        <el-table-column align="center" prop="first_img" label="文章图片" width="80">
          <template slot-scope="scope">
            <div>
              <el-image style="width:60px; height:60px" :src="scope.row.first_img"></el-image>
            </div>
          </template>
        </el-table-column>

        <el-table-column align="center" label width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/article/home/edit?id=${scope.row.id}`)">编辑</el-button>
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