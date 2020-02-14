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
        <el-form-item label="文章信息：" prop="info">
          <el-input style="width:500px" v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item label="文章类型：" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio :label="1">普通文章</el-radio>
            <el-radio :label="2">公众号文章</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系方式：" prop="contact">
          <el-input style="width:200px" v-model="form.contact"></el-input>
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

        <el-form-item label="是否上架：">
          <template>
            <div>
              <el-switch v-model="form.is_up" :active-value="1" :inactive-value="0"></el-switch>
            </div>
          </template>
        </el-form-item>
        <el-form-item v-if="form.type == 1" label="文章详情：" prop="content">
          <!-- <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            style="width:500px"
            v-model="form.content"
          ></el-input>-->
          <ol-editor v-model="form.content"></ol-editor>
        </el-form-item>
        <el-form-item v-else label="文章详情链接：" prop="content">
          <el-input style="width:500px" v-model="form.content"></el-input>
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