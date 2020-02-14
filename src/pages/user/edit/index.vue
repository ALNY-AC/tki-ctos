<template>
  <div id="edit">
    <el-card shadow="never">
      <el-page-header @back="$back()" :content="isAdd?'创建用户':'编辑用户'"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent label-width="150px" size="small" :model="form" ref="form" :rules="rules">
        <el-form-item label="登录账户" prop="phone">
          <el-input v-model="form.phone" placeholder="手机号"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="登录密码" prop="pwd1">
          <el-input v-model="form.pwd1"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="pwd2">
          <el-input v-model="form.pwd2"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button type="danger" @click="submit">提交</el-button>
        </el-form-item>

      </el-form>

    </el-card>

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>