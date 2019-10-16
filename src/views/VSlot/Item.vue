/**Created by MonTage_fz on 2019/10/16**/
<template>
    <li class="Item">
        <slot :num="item.num">
            <div>
                {{item.isTrue}}
            </div>
        </slot>
        <slot name="footer">
            2
        </slot>
    </li>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            item: Object,
        },
        components: {},
        data() {
            return {};
        },
        created() {
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .Item {
    }
</style>
