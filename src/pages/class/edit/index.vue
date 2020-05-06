<template>
  <div id="edit">
    <el-card shadow="never">
      <el-page-header @back="$back()" :content="isAdd?'创建分类':'编辑分类'"></el-page-header>
      <el-divider></el-divider>
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="分类名称：" prop="title">
          <el-input style="width:500px" v-model="form.name"></el-input>
        </el-form-item>
  
        <el-form-item label="上传分类图标：" prop="icon">
          <el-row v-if="form.icon">
            <el-col :span="6">
              <img :src="$getUrl(form.icon)" class="form-img" />
              <el-button @click="form.icon = ''" icon="el-icon-delete" type="danger"></el-button>
            </el-col>
          </el-row>
          <upload
            v-if="!form.icon"
            @on-success="url=>form.icon = url"
            icon="el-icon-plus"
          ></upload>
        </el-form-item>

        <el-form-item label="预估金额：" prop="price">
          <el-tag
          :key="tag"
          v-for="tag in form.price"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          type="number"
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加金额</el-button>
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