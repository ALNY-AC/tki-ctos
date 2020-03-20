<template>
  <div class="list-user-card" v-if="userInfo">
    <div class="user-info">
      <el-avatar shape="square" style="min-width:40px" :size="40" :src="$getUrl(userInfo.head_img)"></el-avatar>
      <div class="user-value" v-if="userInfo.name&&infoType == 'info'">{{userInfo.name}}</div>
      <div class="user-value" v-if="userInfo.wx_info&&infoType == 'wx'">{{userName}}</div>
      <div class="user-value" v-if="userInfo.phone">{{userInfo.phone}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListUserCard",
  props: {
    userInfo: {
      type: Object,
      default: null
    },
    infoType: {
      type: String,
      default: "info"
    }
  },
  computed: {
    userName() {
      if (!this.userInfo) return;
      return JSON.parse(this.userInfo.wx_info).nickname;
    }
  }
};
</script>
<style lang="scss" scoped>
.list-user-card {
  .user-info {
    text-align: center;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;

    .user-value {
      line-height: normal;
      margin-left: 5px;
    }
  }
}
</style>