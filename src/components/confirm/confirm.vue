<template>
    <transition name="fade" @after-leave="" @after-enter="">
        <div class="confirm" v-show="visible">
            <div class="mask" key="0"></div>
            <div class="confirm-content" key="1">
                <div class="confirm-body">
                    <p>{{content}}</p>
                    <span class="close-btn" @click="handleCancelClose">
                        <i class="iconfont icon-close"></i>
                    </span>
                </div>
                <div class="confirm-footer" @click="handleConformClose">
                    <button>{{btn}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "confirm",
        props: {
            content: {
                type: String,
                default: '确认关闭？'
            },
            btn: {
                type: String,
                default: '确定'
            }
        },
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleConformClose(e) {
                e.preventDefault()
                this.$emit('close', 'confirm')
            },
            handleCancelClose (e) {
                e.preventDefault()
                this.$emit('close', 'cancelz')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .confirm
        position fixed
        display flex
        align-items center
        width 100%
        height 100%
        flex-wrap wrap
        transition all .3s

    .mask
        position absolute
        z-index 1
        width 100%
        height 100%
        background-color #44393994

    .confirm-content
        min-width 180px
        margin 0 auto
        text-align center
        z-index 2
        border-radius 4px
        box-shadow 0px 0px 20px #f2f3b194
        background #fff

    .confirm-body
        position: relative
        padding 20px

    .confirm-footer button
        width 100%
        line-height 32px
        text-align center
        font-size 13px
        font-weight 300
        color #fff
        background-color #1fa3ff
        cursor: pointer

    .close-btn
        position absolute
        top: 10px
        right: 10px
        cursor: pointer
</style>