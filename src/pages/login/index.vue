<template>
  <div id="login">
    <div class="logo-img">
      <img src="@/static/images/logo.png" alt="">
    </div>
    <div class="login-box">
      <div class="title">家有益房管理后台</div>
      <div class="form-box">
        <el-form @submit.native.prevent :model="form" size="default">
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="账户名：手机号码"></el-input>
          </el-form-item>
          <el-form-item prop="user_pwd">
            <el-input type="password" v-model="form.user_pwd" placeholder="账户密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="danger" class="block" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>