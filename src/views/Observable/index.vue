/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="Observable">
        <Brother></Brother>
        <Children></Children>
    </div>
</template>

<script>
    import Brother from './ObservableBrother';
    import Children from './ObservableChildren';

    export default {
        name: 'Observable',
        components: {
            Brother,
            Children
        },
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
    .Observable {
    }
</style>
