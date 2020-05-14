<template>
  <div id="info">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="分销号详情"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent label-width="150px" size="small" v-if="form">
        <el-form-item label="分销号昵称：">
          <span>{{form.name}}</span>
        </el-form-item>

        <el-form-item label="二维码：">
          <!-- <el-image style="width:100px; height:100px" :src="form.head_img"></el-image> -->
          <div id="qrcode" ref="Qrcode"></div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
  <script src="./index.js"></script>
  <style lang="scss" scoped>
@import "index.scss";
</style>