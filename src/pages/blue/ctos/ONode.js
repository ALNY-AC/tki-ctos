export default class ONode {

    $el = '';
    el = '';
    prop = {};
    content = null;

    constructor(tagName = '', prop = {}, content = null) {

        this.tagName = tagName;
        this.prop = prop;
        this.content = content;
    }

    createElement() {

        this.$el = document.createElement(this.tagName);


        let kMap = ['style', 'on'];
        Object.keys(this.prop).forEach(key => {
            if (kMap.indexOf(key) <= 0) {
                let attr = document.createAttribute(key);
                attr.nodeValue = this.prop[key];
                this.$el.setAttributeNode(attr);
            }
        });

        if (typeof this.prop['style'] != 'undefined') {
            if (typeof this.prop['style'] == 'string') {
                this.$el.style = this.prop.style;
            } else {
                Object.keys(this.prop.style).forEach(key => {
                    this.$el.style[key] = this.prop.style[key]
                })
            }
        }
        if (typeof this.prop['on'] != 'undefined') {

            Object.keys(this.prop.on).forEach(key => {
                // console.warn(this.prop.on[key]);
                this.$el.addEventListener(key, (e) => this.prop.on[key].call(this, e))
            });
        }


        this.initEvent(this.$el);

        this.setContent(this.$el, this.content);


        return this.$el;
    }
    initEvent($el) {

        $el.addEventListener('mouseover', (e) => {
            // console.warn(Math.random());
            $el.style.outline = 'solid 1px #f00';
            e.stopPropagation();
        });
        $el.addEventListener('mouseout', (e) => {
            // console.warn(Math.random());
            $el.style.outline = null;
            e.stopPropagation();
        });

    }
    setContent($el, node) {

        if (typeof node == 'object') {
            let className = node.constructor.name;

            if (className == 'ONode') {
                $el.append(node.createElement());
            }
            if (className == 'Array') {
                node.forEach(el => {
                    this.setContent($el, el);
                });
            }

        } else {
            $el.innerHTML = node;
        }
    }

}