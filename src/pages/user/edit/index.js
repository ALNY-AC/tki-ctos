export default {
    name: 'edit',
    data() {
        return {
            selected: [],
            type: 2,
            form: {
                phone: '',//手机号
                real_name: '',//真实姓名
                pwd: '',//密码
                user_type: 1,
                gender:"",//性别
                name:"",//用户名
                head_img:"",//用户头像
                user_type:2,




            },
            rules: {
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
                const res = await this.$http.post('/user/info', { id: this.$route.query.id });
                if (res.code == 1) {
                    res.data.pwd1 = '';
                    res.data.pwd2 = '';
                    this.form = res.data;
                }
            }
        },
        // 用于更新一些数据
        async submit() {

            if (this.isAdd) {
                if (this.form.pwd1.length <= 0) {
                    this.$message.info('请输入密码！');
                    return;
                }
                if (this.form.pwd2.length <= 0) {
                    this.$message.info('请再次输入密码！');
                    return;
                }
            }

            if (this.form.pwd1.length > 0) {
                if (this.form.pwd1 !== this.form.pwd2) {
                    this.$message.info('两次输入的密码不一致！');
                    return false;
                }
            }


            try {
                await this.$refs['form'].validate();
            } catch (error) {
                return;
            }

            try {
                const res = await this.$http.post('/user/save', this.form);
                if (res.code >= 0) {
                    if (this.isAdd) {
                        await this.$alert(`操作成功！`, '成功', { showClose: false, type: 'success' });
                    } else {
                        this.$message.success('保存成功~');
                    }
                    this.$router.go(-1);
                } else {
                    this.$message.error(res.msg);
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
    watch: {
        type() {
            if (this.type == 1) {
                this.form.company_id = '';
            } else {
                if (!this.isAdd) {
                    this.update();
                }
            }
        }
    },
    // 组件列表
    components: {},
};