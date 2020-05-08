import echarts from 'echarts'

export default {
    name: 'dashboard',
    data() {
        return {
            data: null,
            userChar: null,
            taskChar: null,
            list: [{
                total: 0,
                title: '用户总量'
            }, {
                total: 0,
                title: '总任务量'
            }]
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        initUser() {
            this.userChar = echarts.init(document.getElementById('userData'));
            let option = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.data.user.x,
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        minInterval: 1
                    }
                ],
                series: [
                    {
                        name: '新增用户',
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: this.data.user.data,

                    }
                ]
            };
            this.userChar.setOption(option);

        },
        initTask() {
            this.taskChar = echarts.init(document.getElementById('taskData'));
            let option = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.data.task.x,
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        minInterval: 1
                    }
                ],
                series: [
                    {
                        name: '新增用户',
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: this.data.task.data,

                    }
                ]
            };
            this.taskChar.setOption(option);
        },

        updateUI() {
            if (this.userChar) {
                this.userChar.resize();
                this.taskChar.resize();
            }
        },
        // 用于更新一些数据
        async update() {
            const res = await this.$http.post('/data/info', {});
            this.data = res.data;
            this.list[0].total = res.data.user.total;
            this.list[1].total = res.data.task.total;
            this.initUser();
            this.initTask();
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
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.updateUI();
            })
        });
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