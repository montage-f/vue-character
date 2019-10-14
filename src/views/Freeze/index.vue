/**Created by MonTage_fz on 2019/10/14**/
<template>
    <div class="Freeze">
        <ul class="list">
            <li
                v-for="(item,index) of list"
                :key="index"
            >
                {{item}}
            </li>
        </ul>
        <ul class="freeze-list">
            <li
                v-for="(item,index) of freezeList"
                :key="index"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Freeze',
        components: {},
        data() {
            return {
                list: [],
                freezeList: [],
            };
        },
        created() {
            // 通过控制台上面的观看, 使用Object.freeze比不使用freeze的性能要提高了不少,
            // this.list = Array.from({length: 100000}, (item, i) => i + 1);
            // console.log(this.list, 'list');
            // init 58.83 ms  render 275.66ms patch 1.01s


            // this.freezeList = Object.freeze(Array.from({length: 100000}, (item, i) => i + 1));
            // console.log(this.freezeList, 'freezeList');
            // init 62.05 ms  render 179.55ms patch 556.97ms
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .Freeze {
        display: flex;

        .list, .freeze-list {
            height: 300px;
            width: 200px;
            overflow: auto;
            border: 1px solid #ccc;
        }
    }
</style>
