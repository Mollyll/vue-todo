import Vue from 'vue'
import Component from './confirm.vue'

const ConfirmConstructor = Vue.extend(Component)

const removeInstance = (instance) => {
    if (instance.length <= 0) return
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
    instance = null
}

const confirm = (options) => {
    if (Vue.prototype.$isServer) return

    // confirm是单例
    if (!!instance) return

    const {
        confirmCallback,
        ...rest
    } = options

    const instance = new ConfirmConstructor({
        propsData: {
            ...rest
        },
        confirmCallback: typeof confirmCallback === 'function' ? confirmCallback : null
    })

    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.vm.visible = true

    instance.vm.$on('close', (state)=> {
        if (state === 'confirm') {
            confirmCallback()
        }
        instance.vm.visible = false
        removeInstance(instance)
    })
    return instance.vm
}

export default confirm
