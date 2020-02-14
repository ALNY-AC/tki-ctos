<template>
  <div id="notice">
    <el-card shadow="never" >
      <el-page-header @back="$back()" content="公告管理"></el-page-header>
      <el-divider></el-divider>
      <el-form>
        <el-form-item label="时长购买公告：">
          <el-input
            style="width: 450px;"
            type="textarea"
            :autosize="{ minRows: 4}"
            placeholder="请输入内容"
            v-model="form.text1"
          ></el-input>
        </el-form-item>
        <el-form-item label="次数购买公告：">
          <el-input
            style="width: 450px;"
            type="textarea"
            :autosize="{ minRows: 4}"
            placeholder="请输入内容"
            v-model="form.text2"
          ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button style="margin-left: 110px;" type="primary" @click="notice()">发布公告</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>