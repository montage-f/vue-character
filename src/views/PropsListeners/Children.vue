/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="Children">
        <button @click="$emit('handleClick','儿子')">儿子</button>
    </div>
</template>

<script>
    export default {
        name: 'Children',
        props: {
            num: Number,
            str: String,
        },
        components: {},
        data() {
            return {};
        },
        created() {
            console.log(this.$props);
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .Children {
    }
</style>
