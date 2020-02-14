<template>
  <div id="ctos">
    <!-- <input type="number" v-model="fontSize"> -->
    <div class="prop-panel">
      <div class="tree">
        <el-tree @node-click="nodeClick" default-expand-all :data="tree"></el-tree>
      </div>
      <div class="form" v-if="active">

        <el-form>
          <el-form-item label="字体大小">
            <el-input-number :value="activeFontSize" @change="(e)=>{active.prop.style.fontSize=`${e}px`;reader()}"></el-input-number>
          </el-form-item>
          <el-form-item label="字体颜色">
            <el-color-picker v-model="active.prop.style.color" @change="reader()"></el-color-picker>
          </el-form-item>
          <el-form-item label="背景颜色">
            <el-color-picker v-model="active.prop.style.backgroundColor" @change="reader()"></el-color-picker>
          </el-form-item>
          <el-form-item label="高度">
            <el-input v-model="active.prop.style.height" @change="reader()"></el-input>
            <!-- <el-color-picker v-model="active.prop.style.backgroundColor" @change="reader()"></el-color-picker> -->
          </el-form-item>
          <el-form-item label="脚本">
            <el-input v-model="js" @change="reader()"></el-input>
            <!-- <el-color-picker v-model="active.prop.style.backgroundColor" @change="reader()"></el-color-picker> -->
          </el-form-item>
          <el-form-item label="布局">
            <el-radio-group v-model="active.prop.style.display" @change="reader()">
              <el-radio label="block">block</el-radio>
              <el-radio label="flex">flex</el-radio>
              <el-radio label="inline">inline</el-radio>
            </el-radio-group>
            <!-- <el-color-picker v-model="active.prop.style.backgroundColor" @change="reader()"></el-color-picker> -->
          </el-form-item>
        </el-form>
        <div>
          {{active}}
        </div>
      </div>

    </div>
    <div id="app"></div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>