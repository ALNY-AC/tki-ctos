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
    async frozen(item) {

      try {
        await this.$confirm(`确认通过？`, '提示')
      } catch (error) {
        return false;
      }
      const res = await this.$http.post('/task/save', {
        state: 1,
        id: item.id,
      });
      if (res.code >= 0) {
        this.$message.success('操作成功！');
        this.update()
      } else {
        this.$message.error('操作失败！');
      }
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
    async remd(id) {
      try {
        await this.$confirm('确认推荐此任务？', '提示')
      } catch (error) {
        return false;
      }
      const res = await this.$http.post('/task/save', {
        is_top: 1,
        id: id
      });
      if (res.code >= 0) {
        this.$message.success('操作成功！');
        this.update()
      } else {
        this.$message.error('操作失败！');
      }
    },
    async conduct(id) {
      try {
        const confirm = await this.$confirm('是否将任务回退?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
      } catch (error) {
        return false
      }
      try {
        const res = await this.$http.post('/task/running', {
          id: id
        })
        if (res.code > 0) {
          this.$message.success('操作成功！');
          this.update()
        } else {
          this.$message.error('操作失败！');
        }
      } catch (error) {

      }
    },
    async end(id) {
      try {
        const res = await this.$http.post('/task/stop', {
          id: id
        })
        if (res.code > 0) {
          this.$message.success('操作成功！');
          this.update()
        } else {
          this.$message.error('操作失败！');
        }
      } catch (error) {

      }
    },
    async updateState(item, stateText) {
      try {
        await this.$confirm(`确认修改为${stateText}状态吗?`, '提示', {})
      } catch (error) {

      }

    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
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
