export default {
    name: 'edit',
    data() {
        return {
            form: {
                name: '', //文章标题
                icon: '',
                price:[],
            },
            newUrl: '',
            inputVisible: false,
            inputValue:'',
            rules: {
                name: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                ],
                icon: [
                    { required: true, message: '请输入分类图标', trigger: 'blur' },
                ],
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
                const res = await this.$http.post('/class/info', { id: this.$route.query.id });
                console.log(res)
                if (res.code == 1) {
                    this.form = res.data;
                }
            } else {
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
                const res = await this.$http.post('/class/save', this.form);
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
        handleClose(tag) {
            this.form.price.splice(this.form.price.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.form.price.push(Number(inputValue));
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
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