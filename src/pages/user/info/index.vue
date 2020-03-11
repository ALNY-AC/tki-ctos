<template>
  <div id="info">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="账户详情"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent label-width="150px" size="small" v-if="form">
        <el-form-item label="用户头像：">
          <el-image style="width:100px; height:100px" :src="form.head_img"></el-image>
        </el-form-item>

        <el-form-item label="用户昵称：">
          <span>{{form.name}}</span>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">立即更改</el-button>
        </el-form-item> -->

        <!-- <el-form-item label="账号状态：">
          <span v-if="form.state==1">正常</span>
          <span v-if="form.state==0">禁用</span>
        </el-form-item>-->
      </el-form>
    </el-card>
  </div>
</template>
  <script src="./index.js"></script>
  <style lang="scss" scoped>
@import "index.scss";
</style>