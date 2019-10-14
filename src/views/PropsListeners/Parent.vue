/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="Parent">
        <button @click="$emit('handleClick','父亲')">父亲</button>
        <Children
            v-bind="$props"
            str="父亲"
            v-on="$listeners"></Children>
    </div>
</template>

<script>
    import Children from './Children';

    export default {
        name: 'Parent',
        props: {
            num: Number,
            str: String,
        },
        components: {
            Children,
        },
        data() {
            return {};
        },
        created() {
            console.log(this.$props);
            console.log(this.$listeners);
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .Parent {
    }
</style>
