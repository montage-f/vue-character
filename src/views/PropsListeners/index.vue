/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="PropsListeners">
        太祖父
        <Parent
            :num="1"
            str="太祖父"
            @handleClick="handleClick"
        ></Parent>
    </div>
</template>

<script>
    import Parent from './Parent';

    export default {
        name: 'PropsListeners',
        components: {
            Parent,
        },
        data() {
            return {};
        },
        created() {
        },
        computed: {},
        methods: {
            handleClick(item) {
                console.log(item);
            },
        },
    };
</script>

<style scoped lang="less">
    .PropsListeners {
    }
</style>
