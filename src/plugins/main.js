import Vue from 'vue';
import './directive.js';
import './filter.js';
import './url.js';
import Http from './Http.js';
import './components.js';
import './Origin.js';
import ElementUI from 'element-ui';
import '../styles/element-variables.scss'
import { pcaa } from 'area-data-vue';
import 'area-linkage-vue/dist/index.css';
import AreaLinkageVue from 'area-linkage-vue';
Vue.prototype.$pcaa = pcaa;

Vue.use(AreaLinkageVue)


Vue.use(ElementUI, {
    size: 'small'
});

import '@/styles/styles.scss';

Vue.prototype.$http = Http;



