<template>
  <el-menu
    router
    class="o-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
     <el-submenu index="data">
      <template slot="title">
        <span>概况</span>
      </template>
      <el-menu-item index="/data/dashboard" :route="{path:'/data/dashboard'}">数据统计</el-menu-item>
     
    </el-submenu>
    <el-submenu index="文章">
      <template slot="title">
        <span>文章管理</span>
      </template>
      <el-menu-item index="/article/home/list" :route="{path:'/article/home/list'}">文章列表</el-menu-item>
    </el-submenu>
    <el-submenu index="审核">
      <template slot="title">
        <span>提现审核</span>
      </template>
      <el-menu-item index="/examine/list" :route="{path:'/examine/list'}">提现列表</el-menu-item>
    </el-submenu>
    <el-submenu index="任务">
      <template slot="title">
        <span>任务管理</span>
      </template>
      <el-menu-item index="/house/list" :route="{path:'/house/list'}">任务列表</el-menu-item>
      <el-menu-item index="/house/examine" :route="{path:'/house/examine'}">审核列表</el-menu-item>
      <el-menu-item index="/house/remd" :route="{path:'/house/remd'}">推荐任务</el-menu-item>
    </el-submenu>
    <el-submenu index="投诉">
      <template slot="title">
        <span>意见管理</span>
      </template>
      <el-menu-item index="/house/list" :route="{path:'/suggest/list'}">投诉列表</el-menu-item>
    </el-submenu>
    <el-submenu index="用户">
      <template slot="title">
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user/list" :route="{path:'/user/list'}">用户列表</el-menu-item>
      <!-- <el-menu-item index="/order/list" :route="{path:'/order/list'}">订单列表</el-menu-item> -->
    </el-submenu>
    
    <el-submenu index="class">
      <template slot="title">
        <span>分类管理</span>
      </template>
      <el-menu-item index="/class/list" :route="{path:'/class/list'}">分类列表</el-menu-item>
    </el-submenu>
    <el-submenu index="distribution">
      <template slot="title">
        <span>分销号管理</span>
      </template>
      <el-menu-item index="/distribution/list" :route="{path:'/distribution/list'}">分销号列表</el-menu-item>
    </el-submenu>
    <el-submenu index="config">
      <template slot="title">
        <span>系统</span>
      </template>
      <el-menu-item index="/config/edit" :route="{path:'/config/edit'}">配置</el-menu-item>
    </el-submenu>
    <!-- <el-submenu index="user">
      <template slot="title">
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user/list" :route="{path:'/user/list'}">用户列表</el-menu-item>
    </el-submenu>-->
  </el-menu>
</template>
<script src="./OMenu.js"></script>
<style lang="scss" scoped>
@import "OMenu.scss";
</style>