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
          <span>{{list.task_num}}</span>
        </el-form-item>
        <el-form-item label="任务名称" prop="task_name">
          <span>{{list.task_name}}</span>
        </el-form-item>
        <el-form-item label="任务类别" prop="task_type">
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
        </el-form-item>
        <el-row>
          <!-- <el-button>默认按钮</el-button> -->
          <!-- <el-button @click="hand()">进行中</el-button>
          <el-button @click="qu()">取消退款</el-button> -->
        </el-row>
        
        <!-- <template>
          <div class="box">
            <span class="left"></span>
            <span class="right" @click="$router.push(`/task/refund?id=${info.id}`)">终止任务</span>
          </div>
        </template> -->
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>