<template>
  <div id="dashboard">
    <el-card shadow="never">
      <div slot="header">
        <el-button @click="update">刷新</el-button>
      </div>
      <el-row>
        <el-col :span="8" v-for="(item,i) in list" :key="i">
          <div class="top--data-box">
            <div>{{item.total}}</div>
            <div>{{item.title}}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <h4>每日注册用户(30天内)</h4>
          <div class="chart" id="userData"></div>
        </el-col>
        <el-col :span="12">
          <h4>每日发布任务(30天内)</h4>
          <div class="chart" id="taskData"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>