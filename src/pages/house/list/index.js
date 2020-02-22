import area from "@/plugins/lib/area.js";
export default {
  name: 'list',
  data() {
    return {
      total: 0,
      query: {
        page_size: 10,
        page: 1,
        is_up:"",
        task_type:"",
        name:"",
        task_state:""
      },
      list: [],
      Province_list: null,
      City_list: null,
      County_list: null,
      addressCode: []
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      const {
        province_list,
        city_list,
        county_list
      } = area
      this.Province_list = province_list
      this.City_list = city_list
      this.County_list = county_list
      this.update();
    },
    // 用于更新一些数据
    async update() {
      if (this.addressCode.length > 0) {
        this.query.a = this.addressCode[2]
      }
      const res = await this.$http.post('/task/list', this.query);
      if (res.code >= 0) {

        this.total = res.total;
        this.list = res.data;
      }
    },
    async frozen(item) {
      if (item.is_up == 1) {
        try {
          await this.$confirm(`确认禁用？`, '提示')
        } catch (error) {
          return false;
        }
        const res = await this.$http.post('/task/save', {
          is_up: 0,
          id: item.id,
          is_top: 0
        });
        if (res.code >= 0) {
          this.$message.success('操作成功！');
          this.update()
        } else {
          this.$message.error('操作失败！');
        }
      } else {
        try {
          await this.$confirm(`确认启用？`, '提示')
        } catch (error) {
          return false;
        }
        const res = await this.$http.post('/task/save', {
          is_up: 1,
          id: item.id,
        });
        if (res.code >= 0) {
          this.$message.success('操作成功！');
          this.update()
        } else {
          this.$message.error('操作失败！');
        }

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
    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.init();
    this.$nextTick(() => {});
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() {},
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  //Vue 实例销毁后调用。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() {},
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
