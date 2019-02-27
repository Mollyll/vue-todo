import Vue from 'vue'
import App from './app.vue'
import confirm from './components/confirm/index.js'
import notify from './components/notification/index.js'

import './assets/font/iconfont.css'

Vue.use(confirm)
Vue.use(notify)

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)