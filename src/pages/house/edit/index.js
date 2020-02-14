export default {
    name: 'edit',
    data() {
        return {
            newUrl: '',
            address: ['','',''],
            form: {
                number: '',//房源编号
                floor: '',//房源楼层
                img_list: [],//上传图片
                type: '',//房源类型
                year: '',//房源年代
                house_state: '待售',//房源状态
                name: '',//业主姓名
                phone: '',//业主电话
                frequency: '',//查看次数
                remarks: '',//房屋备注
                title: '',//房源名称
                price: '',//房源价格
                area: '',//房间面积
                towards: '东',//朝向
                fill: "精装",//装修风格
                bedroom: 0,//卧室
                room: 0,//客厅
                wc: 0,//厕所
                state: 0,//是否上架
                p: '', //省
                c: '',//市
                a: '',//区
            },
            rules: {
                number: [
                    { required: true, message: '请输入房源编号', trigger: 'blur' },
                ],
                floor: [
                    { required: true, message: '请输入房源楼层', trigger: 'blur' },
                ],
                type: [
                    { required: true, message: '请输入房源类型', trigger: 'blur' },
                ],
                year: [
                    { required: true, message: '请输入房源年代', trigger: 'blur' },
                ],
                house_state: [
                    { required: true, message: '请选择房源状态', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入业主姓名', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入业主电话', trigger: 'blur' },
                ],
                frequency: [
                    { required: true, message: '请输入查看次数', trigger: 'blur' },
                ],
                remarks: [
                    { required: true, message: '请输入房屋备注', trigger: 'blur' },
                ],
                price: [
                    { required: true, message: '请输入房屋价格', trigger: 'blur' },
                ],
                title: [
                    { required: true, message: '请输入房屋名称', trigger: 'blur' },
                ],
                area: [
                    { required: true, message: '请输入房屋面积', trigger: 'blur' },
                ],
                towards: [
                    { required: true, message: '请输入房屋朝向', trigger: 'blur' },
                ],
                fill: [
                    { required: true, message: '请输入装修风格', trigger: 'blur' },
                ],
                bedroom: [
                    { required: true, message: '请输入几室', trigger: 'blur' },
                ],
                room: [
                    { required: true, message: '请输入几厅', trigger: 'blur' },
                ],
                wc: [
                    { required: true, message: '请输入几卫', trigger: 'blur' },
                ]
            },
            stateArr: ['待售', '已开售', '售罄']
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        async update() {
            if (!this.isAdd) {

                const res = await this.$http.post('/house/info', { id: this.$route.query.id });
                if (res.code <= 0) return;
                if (!res.data.img_list) {
                    res.data.img_list = []
                }
                this.form = res.data;
                this.address = [res.data.p, res.data.c, res.data.a]
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
                const res = await this.$http.post('/house/save', this.form);
                if (res.code >= 0) {
                    if (this.isAdd) {
                        await this.$alert(`操作成功！`, '成功', { showClose: false, type: 'success' });
                    } else {
                        this.$message.success('保存成功~');
                    }
                    this.$router.go(-1)
                }
            } catch (error) {
                return;
            }



        },

        areaChange() {
            this.form.p = this.address[0];
            this.form.c = this.address[1];
            this.form.a = this.address[2];
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