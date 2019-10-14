<template>
    <div class="home">
        <div class="change-view">
            <p>
                <router-link to="/freeze">使用Object.freeze优化vue组件渲染性能</router-link>
            </p>
            <p>
                <router-link to="/observable">使用vue.observable实现最小跨组件状态存储器</router-link>
            </p>
            <p>
                <router-link to="/props-listeners">使用$props和$listeners传递参数和事件</router-link>
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'home',
        components: {},
        data() {
            return {};
        },
        created() {
        },
        methods: {},
    };
</script>
<style scoped lang="less">
    .home {

    }
</style>
