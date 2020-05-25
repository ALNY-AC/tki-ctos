import area from "@/plugins/lib/area.js";
export default {
  name: 'list',
  data() {
    return {
      total: 0,
      query: {
        page_size: 10,
        page: 1,
        is_up: "",
        is_top: '',
        task_type: "",
        task_name: "",
        task_state: "",
        state: ""
      },
      list: [],
      classList: [],
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
      this.httpClass();
    },
    // 用于更新一些数据
    async update() {
      const res = await this.$http.post('/task/list', this.query);
      if (res.code >= 0) {
        this.total = res.total;
        this.list = res.data;
      }
    },
    async httpClass() {
      const res = await this.$http.post('/class/list', {});
      this.classList = res.data;
    },
    async save(item) {
      const res = await this.$http.post('/task/save', item);
      if (res.code >= 0) {
        this.$message.success('操作成功！');
        this.update()
      } else {
        this.$message.error('操作失败！');
      }
    },

    async updateState(item, state, stateText) {
      try {
        await this.$confirm(
          <div>确认修改为 <b style={{ color: '#f00' }} >{stateText}</b> 状态吗?</div>
          , '提示', {});

        const res = await this.$http.post('/task/update_state', {
          id: item.id,
          task_state: state
        });

        item.task_state = state;
        if (res.code >= 0) {
          this.$message.success('操作成功～');
          this.update();
        }

      } catch (error) {
        return;
      }


    },
    async del(item) {

      console.warn(item);

      const res = await this.$http.post('/task/del', {
        id: item.id,
      });

      if (res.code >= 0) {
        this.$message.success('操作成功～');
        this.update();
      }

    },
    class_name(v) {
      let item = this.classList.find(el => el.id == v);
      if (item) {
        return item.name;
      } else {
        return '未知分类';
      }

    },
    showImg(url) {
      window.open(this.$getUrl(url));
    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {

  },
  // 在实例创建完成后被立即调用
  created() { },
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() { },
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.init();
    this.$nextTick(() => { });
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() { },
  // keep-alive 组件激活时调用。
  activated() { },
  // keep-alive 组件停用时调用。
  deactivated() { },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() { },
  //Vue 实例销毁后调用。
  destroyed() { },
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() { },
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {
    'query.page'() {
      this.update();
    },
    'query.page_size'() {
      this.update();
    }
  },
  // 组件列表
  components: {},
};
