<template>
  <div id="info">
    <el-form
      @submit.native.prevent
      label-width="150px"
      size="small"
      :model="form"
      ref="form"
      :rules="rules"
    >

      <el-form-item label="驳回理由:" prop="number">
        <el-input v-model="remarks" style="width:500px"></el-input>
      </el-form-item>

      <el-form-item label>
        <el-button type="danger" size="medium" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>