import Confirm from './confirm.vue'
import confirm from './function.js'

export default (Vue) => {
    Vue.component(Confirm.name, Confirm)
    Vue.prototype.$confirm = confirm
}