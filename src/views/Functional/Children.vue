/**Created by MonTage_fz on 2019/10/14**/
<template functional>
    <div
        class="Children"
        @click="props.handleClick(props.index)">
        {{props.num}}
    </div>
</template>
<style scoped lang="less">
    .Children {
        border: 1px solid #ccc;
        margin-bottom: 10px;
    }
</style>

