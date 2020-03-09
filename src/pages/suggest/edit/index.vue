<template>
  <div id="edit">
    <el-card shadow="never">
    <el-page-header @back="$back()" :content="投诉详情"></el-page-header>
      <el-divider></el-divider>
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="投诉与建议:" prop="text">
          <span>{{list.text}}</span>
        </el-form-item>
        <el-form-item label="备注:" prop="remarks">
          <span>{{list.remarks}}</span>
        </el-form-item>
        <el-form-item label>
          <el-button type="primary" size="medium" @click="adopt">处理</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>