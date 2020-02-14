<template>
  <div id="list">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="房源列表"></el-page-header>
      <el-divider></el-divider>
      <el-form inline @submit.native.prevent>
        <el-form-item>
          <el-button icon="el-icon-plus" @click="$router.push('/house/edit')">新增房源</el-button>
        </el-form-item>
        <el-form-item label="名称：">
          <el-input
            style="width:200px"
            v-model="query.title"
            placeholder="房源名称"
            @keydown.enter.native="update"
          ></el-input>
        </el-form-item>
        <el-form-item label="归属地：">
          <area-cascader :level="1" v-model="addressCode" :data="$pcaa"></area-cascader>
        </el-form-item>

        <el-form-item label="状态：">
          <el-select v-model="query.state" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="上架" :value="1"></el-option>
            <el-option label="下架" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态：">
          <el-select v-model="query.data_state" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="启用" :value="1"></el-option>
            <el-option label="禁用" :value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="title" width="150" label="房源名称"></el-table-column>
        <el-table-column align="center" prop width="250" label="房源图片">
          <template slot-scope="scope">
            <div class="img-box">
              <div v-for="(item,index) in scope.row.img_list" class="img" :key="index">
                <el-image v-if="index < 4" style="width: 50px; height:50px" :src="item"></el-image>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="150" label="房源发布人">
          <template slot-scope="scope">
            <span>{{scope.row.name ? scope.row.name : ''}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="100" label="发布人头像">
          <template slot-scope="scope">
            <el-image
              v-if="scope.row.head_img"
              style="width:60px; height:60px"
              :src="scope.row.head_img"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="100" label="房源估价">
          <template slot-scope="scope">
            <span>{{scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="200" label="房源归宿地">
          <template slot-scope="scope">
            <span>{{Province_list[scope.row.p]+City_list[scope.row.c]+County_list[scope.row.a]}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop width="100" label="房屋结构">
          <template slot-scope="scope">
            <span>{{scope.row.bedroom}}室{{scope.row.room}}厅{{scope.row.wc}}卫</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="towards" width="100" label="向阳面"></el-table-column>
        <el-table-column align="center" prop="area" width="120" label="房间面积">
          <template slot-scope="scope">
            <span>{{scope.row.area}}m</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="fill" width="100" label="装修类型"></el-table-column>
        <el-table-column align="center" prop="add_time" width="200" label="发布时间"></el-table-column>
        <el-table-column align="center" prop="state" label="状态" width="80">
          <template slot-scope="scope">
            <div>
              <el-switch
                v-model="scope.row.state"
                @change="save(scope.row)"
                :active-value="1"
                :inactive-value="0"
              ></el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/house/edit?id=${scope.row.id}`)">编辑</el-button>
            <el-button type="text" v-if="scope.row.data_state == 1" @click="frozen(scope.row.id)">禁用</el-button>
            <el-button type="text" v-else @click="start(scope.row.id)">启用</el-button>
            <el-button type="text" v-if="scope.row.is_top == 0" @click="remd(scope.row.id)">推荐</el-button>
            <el-button type="text" v-else @click="cancel(scope.row.id)">取消推荐</el-button>
            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin:20px 0"
        :current-page.sync="query.page"
        :page-sizes="[5,10, 20, 30, 40]"
        :page-size.sync="query.page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>