<template>
  <el-menu
    router
    class="o-menu"
    background-color="#4E546C"
    text-color="#fff"
    active-text-color="#2DD1AC"
  >
    <!-- <el-submenu index="job">
      <template slot="title">
        <span>招聘管理</span>
      </template>
      <el-menu-item index="/job/list" :route="{path:'/job/list'}">职位列表</el-menu-item>
    </el-submenu>-->
    <!-- <el-submenu index="liuyan">
      <template slot="title">
        <span>留言系统</span>
      </template>
      <el-menu-item index="/liuyan/list" :route="{path:'/liuyan/list'}">用户留言</el-menu-item>
    </el-submenu>-->
    <!-- <el-submenu index="tuwen">
      <template slot="title">
        <span>图文系统</span>
      </template>
      <el-menu-item index="/tuwen/list" :route="{path:'/tuwen/list'}">图文列表</el-menu-item>
    </el-submenu>-->

    <!-- <el-submenu index="goods">
      <template slot="title">
        <span>商品管理</span>
      </template>
      <el-menu-item index="/goods/list" :route="{path:'/goods/list'}">商品列表</el-menu-item>
    </el-submenu>-->

    <el-submenu index="文章">
      <template slot="title">
        <span>文章管理</span>
      </template>
      <el-menu-item index="/article/home/list" :route="{path:'/article/home/list'}">文章列表</el-menu-item>
    </el-submenu>
    <el-submenu index="任务">
      <template slot="title">
        <span>任务管理</span>
      </template>
      <el-menu-item index="/house/list" :route="{path:'/house/list'}">任务列表</el-menu-item>
      <el-menu-item index="/house/examine" :route="{path:'/house/examine'}">审核列表</el-menu-item>
      <el-menu-item index="/house/remd" :route="{path:'/house/remd'}">推荐任务</el-menu-item>
    </el-submenu>
    <el-submenu index="用户">
      <template slot="title">
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user/list" :route="{path:'/user/list'}">用户列表</el-menu-item>
      <el-menu-item index="/order/list" :route="{path:'/order/list'}">订单列表</el-menu-item>
    </el-submenu>
    <el-submenu index="公告">
      <template slot="title">
        <span>公告管理</span>
      </template>
      <el-menu-item index="/notice" :route="{path:'/notice'}">公告管理</el-menu-item>
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