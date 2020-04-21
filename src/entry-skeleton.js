
const Vue = require('vue')
import skeleton from './views/skeleton/skeleton.vue';


// 创建一个骨架屏 Vue 实例
export default new Vue({
    components: {
        skeleton
    },
    template: '<skeleton />'
});