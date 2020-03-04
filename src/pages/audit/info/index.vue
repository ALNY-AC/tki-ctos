<template>
  <div id="info">
    <el-page-header @back="$back()" content="拒绝理由"></el-page-header>
    <el-divider></el-divider>
    <el-card shadow="never">
      <el-form>
        <el-form-item label="拒绝理由">
          <el-input style="width:500px" v-model="remark" type="text" placeholder="备注"></el-input>
        </el-form-item>
          <el-form-item label>
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