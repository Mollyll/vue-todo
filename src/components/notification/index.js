import Notification from './nodification.vue';
import notify from './function.js'

// 注册到全局组件
// 若写一个组件库，将会有许多的组件，因此最好将每个组件都命名
export default (Vue) => {
    Vue.component(Notification.name, Notification)
    Vue.prototype.$notify = notify
}