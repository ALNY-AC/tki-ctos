export default {
    name: 'edit',
    data() {
        return {
            form: {
                title: '', //文章标题
                // info: '', //文章信息
                first_img: '',
                type: 1,//文章类型
                is_up:1,
                content: '', //文章详情
  
                type: 1,
                sub_title:"",//文章副标题
           
            },
            newUrl: '',
            rules: {
                title: [
                    { required: true, message: '请输入文章标题', trigger: 'blur' },
                ],
                sub_title: [
                    { required: true, message: '请输入文章副标题', trigger: 'blur' },
                ],
                article_info: [
                    { required: true, message: '请输入文章信息', trigger: 'blur' },
                ],
                article_head: [
                    { required: true, message: '请上传文章图片', trigger: 'blur' },
                ],
                article_text: [
                    { required: true, message: '请输入文章详情', trigger: 'blur' },
                ]
            }
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        async update() {
            if (!this.isAdd) {
                const res = await this.$http.post('/paper/info', { id: this.$route.query.id });
                if (res.code == 1) {
                    this.form = res.data;
                }
            }else {
                this.form.app_id = this.$route.query.app_id;
              }
            
        },
        // 用于更新一些数据
        async submit() {

            try {
                await this.$refs['form'].validate();
            } catch (error) {
                return;
            }

            try {
                const res = await this.$http.post('/paper/save', this.form);
                if (res.code >= 0) {
                    if (this.isAdd) {
                        await this.$alert(`操作成功！`, '成功', { showClose: false, type: 'success' });
                    } else {
                        this.$message.success('保存成功~');
                    }
                    this.$router.go(-1);
                }
            } catch (error) {
                return;
            }



        },
    },
    // 计算属性
    computed: {
        isAdd() {
            return typeof this.$route.query.id == 'undefined';
        }
    },
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