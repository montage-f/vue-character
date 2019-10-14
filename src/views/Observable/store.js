/**
 * Created by MonTage_fz on 2019/10/14
 */
import Vue from 'vue';

const state = Vue.observable({
    count: 0,
});

const mutations = {
    add(count) {
        state.count = count;
    },
    minus(count) {
        state.count = count;
    },
};

export {state, mutations};
