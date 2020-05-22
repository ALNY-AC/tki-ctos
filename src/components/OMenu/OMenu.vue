<template>
  <el-menu
    router
    class="o-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/data/dashboard" :route="{path:'/data/dashboard'}">首页</el-menu-item>
    <el-menu-item index="/article/home/list" :route="{path:'/article/home/list'}">文章管理</el-menu-item>
    <el-menu-item index="/examine/list" :route="{path:'/examine/list'}">提现管理</el-menu-item>

    <el-submenu index="任务">
      <template slot="title">
        <span>任务管理</span>
      </template>
      <el-menu-item index="/house/list" :route="{path:'/house/list'}">任务列表</el-menu-item>
      <el-menu-item index="/task/list" :route="{path:'/task/list'}">任务列表2</el-menu-item>
      <el-menu-item index="/house/examine" :route="{path:'/house/examine'}">审核列表</el-menu-item>
      <el-menu-item index="/house/remd" :route="{path:'/house/remd'}">推荐任务</el-menu-item>
    </el-submenu>

    <el-menu-item index="/suggest/list" :route="{path:'/suggest/list'}">反馈管理</el-menu-item>
    <el-menu-item index="/user/list" :route="{path:'/user/list'}">用户管理</el-menu-item>
    <el-menu-item index="/class/list" :route="{path:'/class/list'}">分类管理</el-menu-item>
    <el-menu-item index="/distribution/list" :route="{path:'/distribution/list'}">分销管理</el-menu-item>
    <el-menu-item index="/config/edit" :route="{path:'/config/edit'}">系统配置</el-menu-item>
  </el-menu>
</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>