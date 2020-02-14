<template>
  <div id="edit">
    <el-card shadow="never" :header="isAdd?'创建文章':'编辑文章'">
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="动态标题：" prop="title">
          <el-input style="width:500px" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="动态信息：" prop="info">
          <el-input style="width:500px" v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item label="上传图片：" prop="img_list">
          <el-row v-if="form.img_list.length > 0">
            <el-col v-for="(item,i) in form.img_list" :key="i" :span="6">
              <img :src="$getUrl(form.img_list[i])" class="form-img" />
              <el-button @click="form.img_list.splice(i,1)" icon="el-icon-delete" type="danger"></el-button>
            </el-col>
          </el-row>
          <upload
            v-if="form.img_list.length < 9"
            @on-success="url=>form.img_list.push(url)"
            icon="el-icon-plus"
          ></upload>
          <div>或</div>
          <el-input
            style="width:300px"
            @keydown.enter.native="form.img_list.push(newUrl);newUrl=''"
            v-model="newUrl"
            placeholder="直接输入地址"
          ></el-input>
        </el-form-item>

        <el-form-item label="是否上下架：">
          <template>
            <div>
              <el-switch v-model="form.is_up" :active-value="1" :inactive-value="0"></el-switch>
            </div>
          </template>
        </el-form-item>
        <el-form-item label="动态详情：" prop="content">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            style="width:500px"
            v-model="form.content"
          ></el-input>
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