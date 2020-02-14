<template>
  <div id="edit">
    <el-card shadow="never">
      <el-page-header @back="$back()" :content="isAdd?'新建房源':'编辑房源'"></el-page-header>
      <el-divider></el-divider>
      <el-form
        @submit.native.prevent
        label-width="150px"
        size="small"
        :model="form"
        ref="form"
        :rules="rules"
      >
        <el-divider content-position="left">房源信息</el-divider>
        <el-form-item label="房源编号：" prop="number">
          <el-input style="width:500px" v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="房源名称：" prop="title">
          <el-input style="width:500px" v-model="form.title"></el-input>
        </el-form-item>
        <el-row style="width:640px">
          <el-col :span="12">
            <el-form-item label="房源楼层：" prop="floor">
              <el-input style="width:180px" v-model="form.floor"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="房源类型：" prop="type">
              <el-input style="width:180px" v-model="form.type"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="width:650px">
          <el-col :span="8">
            <el-form-item label="房源估价：" prop="price">
              <el-input style="width:100px" v-model="form.price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="房源年代：" prop="year">
              <el-input style="width:100px" v-model="form.year"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="房源状态：" prop="house_state">
          <el-radio-group v-model="form.house_state" size="small">
            <el-radio v-for="(item,index) in stateArr" :key="index" :label="item" border>{{item}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="房源归属地：" prop="p">
          <area-select class="test" v-model="address" :data="$pcaa" :level="2" @change="areaChange"></area-select>
        </el-form-item>
        <el-divider content-position="left">房间参数</el-divider>
        <el-row style="width:600px">
          <el-col :span="8">
            <el-form-item label="卧室：" prop="bedroom">
              <el-input style="width:80px" v-model="form.bedroom"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客厅：" prop="room">
              <el-input style="width:80px" v-model="form.room"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="洗手间：" prop="wc">
              <el-input style="width:80px" v-model="form.wc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="房间面积：" prop="area">
          <el-input style="width:120px" v-model="form.area"></el-input>
        </el-form-item>
        <el-form-item label="向阳面：" prop="towards">
          <el-radio-group v-model="form.towards" size="small">
            <el-radio label="东" border>东</el-radio>
            <el-radio label="南" border>南</el-radio>
            <el-radio label="西" border>西</el-radio>
            <el-radio label="北" border>北</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="房间装修类型：" prop="fill">
          <el-radio-group v-model="form.fill" size="small">
            <el-radio label="精装" border>精装</el-radio>
            <el-radio label="简装" border>简装</el-radio>
            <el-radio label="毛坯" border>毛坯</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上传房源图片：" prop="img_list">
          <el-row v-if="form.img_list.length > 0">
            <el-col v-for="(item,i) in form.img_list" :key="i" :span="6">
              <img :src="$getUrl(form.img_list[i])" class="form-img" />
              <el-button @click="form.img_list.splice(i,1)" icon="el-icon-delete" type="danger"></el-button>
            </el-col>
          </el-row>
          <upload
            v-if="form.img_list.length < 8"
            @on-success="url=>form.img_list.push(url)"
            icon="el-icon-plus"
          ></upload>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-radio-group v-model="form.state" size="small">
            <el-radio :label="1" border>上架</el-radio>
            <el-radio :label="0" border>下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="房屋备注：" prop="remarks">
          <el-input type="textarea" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-divider content-position="left">业主信息</el-divider>
        <el-row style="width:650px;">
          <el-col :span="8">
            <el-form-item label="业主姓名：" prop="name">
              <el-input style="width:100px" v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业主电话：" prop="phone">
              <el-input style="width:120px" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label>
          <el-button type="danger" size="medium" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>