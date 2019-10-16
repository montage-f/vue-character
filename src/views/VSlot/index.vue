/**Created by MonTage_fz on 2019/10/15**/
<template>
    <div class="VSlot">
        <ul>
            <Item
                v-for="(item,index) of list"
                :item="item"
                :key="index"
            >
                <template #:default="{num}">
                    <div v-if="item.isTrue">
                        {{item.isTrue}}-{{num}}
                    </div>
                </template>

            </Item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item';

    export default {
        name: 'VSlot',
        components: {
            Item,
        },
        data() {
            return {
                list: [],
            };
        },
        created() {
            this.list = Array.from({length: 10}, (item, index) => ({
                num: index + 1,
                isTrue: Math.random() > 0.5,
            }));
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .VSlot {
    }
</style>
