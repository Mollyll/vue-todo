<script>
    export default {
        name: "tab",
        props: {
            index: {
                required: true,
                type: [String, Number]
            },
            label: {
                default: 'tab',
                type: String
            }
        },
        mounted () {
            this.$parent.panes.push(this)
        },
        computed: {
            active () {
                return this.$parent.value === this.index
            }
        },
        render () {
            const tab = this.$slots.label || <span>{this.label}</span>
            const classNames = {
                tab: true,
                active: this.active
            }
            // 使用jsx的语法
            return (
                <li class={classNames} on-click={this.handleClick}>{tab}</li>
            )
        },
        methods: {
            handleClick () {
                this.$parent.onChange(this.index)
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .tab
        list-style none
        line-height 40px
        margin-right 30px
        position relative
        bottom -2px
        cursor pointer
        &.active
            border-bottom 2px solid blue
        &:last-child
            margin-right 0
</style>