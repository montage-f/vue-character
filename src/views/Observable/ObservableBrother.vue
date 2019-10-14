/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="ObservableBrother">
        brother
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script>
    import {mutations, state} from './store';

    export default {
        name: 'ObservableBrother',
        components: {},
        data() {
            return {
                count: state.count,
            };
        },
        created() {
        },
        computed: {},
        methods: {
            add() {
                mutations.add(++this.count);
            },
            minus() {
                mutations.minus(--this.count);
            },
        },
    };
</script>

<style scoped lang="less">
    .ObservableBrother {
    }
</style>
