<template>
  <div id="list">
    <el-card shadow="never" header="审核管理">
      <el-form inline @submit.native.prevent>
        <el-form-item label="状态">
          <el-select v-model="query.state" @change="update" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="审核中" :value="0"></el-option>
            <el-option label="通过" :value="1"></el-option>
            <el-option label="驳回" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-button @click="update">筛选</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" row-key="id" stripe style="width: 100%" border>
        <el-table-column align="left" prop="name" label="门店"></el-table-column>
        <el-table-column align="left" prop="real_name" label="提现人"></el-table-column>
        <el-table-column align="left" label="提现渠道">
          <template slot-scope="scope">
            <span v-if="scope.row.money_type==1">微信</span>
            <span v-if="scope.row.money_type==2">支付宝</span>
            <span v-if="scope.row.money_type==3">银行卡</span>
          </template>
        </el-table-column>
        <el-table-column align="left" prop="money" label="提现账号" width="300"></el-table-column>
        <el-table-column align="left" prop="money" label="提现金额"></el-table-column>

        <el-table-column align="center" prop="add_time" label="创建时间"></el-table-column>
        <el-table-column align="center" prop="text" label="备注"></el-table-column>
        <el-table-column align="center" label="审核状态" width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.state==0">审核中</span>
            <span v-if="scope.row.state==1">通过</span>
            <span v-if="scope.row.state==2">驳回</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="add(scope.row.id)" v-if="scope.row.state==0">同意</el-button>
            <el-button
              type="text"
              v-if="scope.row.state==0"
              @click="$router.push(`/audit/info?id=${scope.row.id}`)"
            >拒绝</el-button>
            <span v-if="scope.row.state==1">已通过</span>
            <span v-if="scope.row.state==2">已驳回</span>
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