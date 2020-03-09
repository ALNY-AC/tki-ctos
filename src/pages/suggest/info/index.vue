<template>
  <div id="info">
    <el-card shadow="never">
    <el-page-header @back="$back()" :content="投诉详情"></el-page-header>
      <el-divider></el-divider>
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="投诉与建议:" prop="text">
          <span>{{list.text}}</span>
        </el-form-item>
        <el-form-item label="备注:" prop="remarks">
          <span>{{list.remarks}}</span>
        </el-form-item>
        <!-- <el-form-item label="任务类别" prop="task_type">
          <span>{{list.task_type}}</span>
        </el-form-item>
        <el-form-item label="任务周期" prop="cycle">
          <span>{{list.cycle}}</span>
        </el-form-item>
        <el-form-item label="任务价格" prop="price">
          <span>{{list.price}}</span>
        </el-form-item>
        <el-form-item label="任务信息" prop="info">
          <span>{{list.info}}</span>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <span>{{list.contact}}</span>
        </el-form-item>
        <el-form-item label="任务备注" prop="notes">
          <span>{{list.notes}}</span>
          <span v-if="list.notes == null">暂无</span>
        </el-form-item> -->
        <!-- <el-form-item label>
          <el-button type="primary" size="medium" @click="adopt">通过</el-button>
          <el-button type="danger" size="medium" @click="refuse">拒绝</el-button>
        </el-form-item> -->
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>