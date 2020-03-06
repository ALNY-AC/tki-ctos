<template>
  <div id="info">
    <el-card shadow="never">
      <el-page-header @back="$back()" :content="新建房源"></el-page-header>
        <el-divider></el-divider>
        <el-form
          @submit.native.prevent
          label-width="150px"
          size="small"
          :model="form"
          ref="form"
          :rules="rules"
        >
        <el-form-item label="任务编号" prop="task_num">
          <el-input style="width:500px" v-model="list.task_num" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务名称" prop="task_name">
          <el-input style="width:500px" v-model="list.task_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务类别" prop="task_type">
          <el-input style="width:500px" v-model="list.task_type" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务周期" prop="cycle">
          <el-input style="width:500px" v-model="list.cycle" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务价格" prop="price">
          <el-input style="width:500px" v-model="list.price" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务信息" prop="info">
          <el-input style="width:500px" v-model="list.info" disabled></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <el-input style="width:500px" v-model="list.contact" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务备注" prop="notes">
          <el-input style="width:500px" v-model="list.notes" disabled></el-input>
        </el-form-item>
        <el-form-item label>
          <el-button type="primary" size="medium" @click="adopt">通过</el-button>
          <el-button type="danger" size="medium" @click="refuse">拒绝</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>