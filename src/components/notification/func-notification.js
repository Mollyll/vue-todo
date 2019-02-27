import Notification from './nodification.vue'

// 扩展组件，覆盖原来的组件
export default {
    extends: Notification,
    computed: {
        style () {
            return {
                position: 'fixed',
                right: '20px',
                bottom: `${this.verticalOffset}px`
            }
        }
    },
    mounted () {
        this.createTimer()
    },
    data () {
        return {
            verticalOffset: 0,
            autoClose: 3000,
            height: 0,
            visible: false
        }
    },
    methods: {
        createTimer () {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false
                }, this.autoClose)
            }
        },
        clearTimer () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        },
        afterEnter () {
            this.height = this.$el.offsetHeight
        }
    },
    beforeDestroy () {
        this.clearTimer()
    }
}