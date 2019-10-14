/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="Functional">
        <Children
            v-for="(item,index) of list"
            v-bind="item"
            :index="index"
            :key="item.id"
            :handleClick="item.handleClick"
        ></Children>
    </div>
</template>

<script>
    import Children from './Children';

    export default {
        name: 'Functional',
        components: {
            Children,
        },
        data() {
            return {
                list: [],
            };
        },
        created() {
            this.list = Array.from({length: 100}, (item, index) => ({
                id: index,
                num: index + 1,
                handleClick: this.handleClick,
            }));
        },
        computed: {},
        methods: {
            handleClick(item) {
                this.list.splice(item, 1);
            },
        },
    };
</script>

<style scoped lang="less">
    .Functional {
    }
</style>
