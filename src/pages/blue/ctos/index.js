
import ONode from "./ONode";
import { render, createElement, htmlToONode } from "./render";

export default {
    name: 'ctos',
    layout: 'root',
    data() {
        return {
            msg: 'aaa',
            fontSize: 10,
            active: null,
            ONode: null,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.reader();
        },

        reader() {
            document.getElementById('app').innerHTML = null;

            console.warn(require('./test/index.vue').default);



            let temp = `<h1 class="blue red-bg" style="border-radius: 20px">Hello<div style="font-size:${this.fontSize}px">ONode<small> origin</small></div></h1>`;
            this.ONode = htmlToONode(temp);
            document.getElementById('app').append(this.ONode.createElement());
            return;
            var _this = this;

            // function click(e) {
            //     _this.active = this;
            //     e.stopPropagation();
            // };
            // return;
            if (!this.ONode) {
                this.ONode = createElement(
                    'div',
                    {
                        class: 'goods-card',
                        style: {
                            fontSize: '10px',
                            color: '#f00',
                            backgroundColor: '#f66',
                            padding: '10px',
                            // height: '100px',
                            display: 'block'
                        },
                        on: { click: click }
                    },
                    [
                        createElement('img', { class: 'goods-img', style: { width: '60px', height: '60px' }, src: 'http://img.sccnn.com/bimg/338/38039.jpg' }, ''),
                        createElement(
                            'div',
                            {
                                style: {
                                    fontSize: '11px',
                                    color: '#f00',
                                    backgroundColor: '#f66',
                                    // height: '100px',
                                    display: 'block'
                                },
                                on: { click: click }
                            },
                            ['ONode', createElement('small', {
                                style: {
                                    fontSize: '12px',
                                    color: '#f00',
                                    backgroundColor: '#f66',
                                    // height: '100px',
                                    display: 'block'
                                },
                                on: { click: click }
                            }, ' origin')]
                        )
                    ]
                );
            }

            // let a = render(createElement);

            document.getElementById('app').append(this.ONode.createElement());

            // console.warn(a);

        },
        nodeClick(data) {
            // console.warn(data);
            this.active = data.ONode
        }

    },
    // 计算属性
    computed: {
        activeFontSize() {

            if (this.active && this.active.prop.style.fontSize) {


                return this.active.prop.style.fontSize.split('px')[0] * 1;
            } else {
                return 0;
            }
        },
        tree() {
            let arr = [];
            function getNode(node) {
                let child = [];
                if (typeof node == 'string') {
                    return {
                        label: 'text',
                        children: []
                    }
                }

                if (typeof node.content != 'string') {
                    if (typeof node.content == 'object' && node.content.constructor.name == 'Array') {
                        node.content.forEach(el => {
                            child.push(getNode(el));
                        });
                    }
                }

                return {
                    label: node.tagName,
                    children: child,
                    ONode: node,
                }
            }
            if (this.ONode) {
                arr = getNode(this.ONode);
                console.warn(arr);
            }

            return [arr];
        }
    },
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    async mounted() {
        await this.$nextTick(() => { });
        this.init();
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
        fontSize() {
            this.reader();
        },
    },
    // 组件列表
    components: {},
};