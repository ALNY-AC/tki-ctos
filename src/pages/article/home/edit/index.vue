<template>
  <div id="edit">
    <el-card shadow="never">
      <el-page-header @back="$back()" :content="isAdd?'创建文章':'编辑文章'"></el-page-header>
      <el-divider></el-divider>
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="文章标题：" prop="title">
          <el-input style="width:500px" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章副标题：" prop="sub_title">
          <el-input style="width:500px" v-model="form.sub_title"></el-input>
        </el-form-item>

        <el-form-item label="文章类型：" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio :label="1">活动</el-radio>
            <el-radio :label="2">帮助文档</el-radio>
          </el-radio-group>
        </el-form-item>
  
        <el-form-item label="上传文章图片：" prop="first_img">
          <!-- <el-input style="width:500px" v-model="form.first_img"></el-input> -->
          <el-row v-if="form.first_img">
            <el-col :span="6">
              <img :src="$getUrl(form.first_img)" class="form-img" />
              <el-button @click="form.first_img = ''" icon="el-icon-delete" type="danger"></el-button>
            </el-col>
          </el-row>
          <upload
            v-if="!form.first_img"
            @on-success="url=>form.first_img = url"
            icon="el-icon-plus"
          ></upload>
        </el-form-item>

    
        <el-form-item label="文章详情：" prop="content">
          <!-- <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            style="width:500px"
            v-model="form.content"
          ></el-input>-->
          <ol-editor v-model="form.content"></ol-editor>
        </el-form-item>
  
        <el-form-item label>
          <el-button type="danger" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>