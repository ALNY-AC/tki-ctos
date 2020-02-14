import Vue from 'vue'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})