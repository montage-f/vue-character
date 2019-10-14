/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="ObservableChildren">
        children:{{count}}
    </div>
</template>

<script>
    import {state} from './store';

    export default {
        name: 'ObservableChildren',
        components: {},
        data() {
            return {};
        },
        created() {
        },
        computed: {
            count: () => state.count,
        },
        methods: {},
    };
</script>

<style scoped lang="less">
    .ObservableChildren {
    }
</style>
