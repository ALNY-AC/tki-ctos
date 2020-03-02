<template>
  <div id="edit">
    <el-card shadow="never">
      <el-form>
        <el-form-item :label="item.name+'：'" v-for="item in info" :key="item.id">
          <template v-if="item.type=='text'">
            <el-input v-model="item.value"></el-input>
          </template>
          <template v-if="item.type=='switch'">
            <el-switch v-model="item.value" active-value="1" inactive-value="0"></el-switch>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button @click="save()">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>