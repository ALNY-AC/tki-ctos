export default {
    name: 'info',
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
            remarks:'',
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
            this.update();
        },
        // 用于更新一些数据
        async update() {
            if (this.addressCode.length > 0) {
                this.query.a = this.addressCode[2]
              }
              const res = await this.$http.post('/task/info', { id: this.$route.query.id });
              if (res.code >= 0) {
                this.total = res.total;
                this.list = res.data;
              }
        },
        async refuse() {

            try {
                let {value} = await this.$prompt('请输入拒绝的理由', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                })

                const res = await this.$http.post('/task/save', {
                    state: 2,
                    id: this.$route.query.id,
                    remarks: value
                });
                if (res.code >= 0) {
                    this.$message.success('操作成功！');
                    this.$router.go(-1);
                }
            } catch (error) {

            }
        },
        async adopt() {
            try {
                const value = await this.$confirm('请再次确认是否通过该任务发布?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                const res = await this.$http.post('/task/save', {
                    state: 1,
                    id: this.$route.query.id,
                });
                if (res.code >= 0) {
                    this.$message.success('操作成功！');
                    this.$router.go(-1);
                }
            } catch (error) {

            }
        },
        // 取消退款
        async qu() {

            const res = await this.$http.post('/task/save', {
                state: 1,
                id: this.$route.query.id,
            });
            if (res.code >= 0) {
                this.$message.success('操作成功！');
                this.$router.go(-1);
            }

        },
        // 进行中
        async hand() {

            const res = await this.$http.post('/task/save', {
                state: 1,
                id: this.$route.query.id,
            });
            if (res.code >= 0) {
                this.$message.success('操作成功！');
                this.$router.go(-1);
            }

        },
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
    watch: {},
    // 组件列表
    components: {},
};