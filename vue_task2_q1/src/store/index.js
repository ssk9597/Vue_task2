import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        records: {
            sex: '男性',
            birthday: new Date().toISOString().substr(0, 10),
            insurance: '',
            hospitalization: '',
            surgery: '',
            consult: '',
        },
    },
    mutations: {
        saveQ1(state, record) {
            state.records.sex = record.sex;
            state.records.birthday = record.birthday;
        },
        saveQ2(state, record) {
            state.records.insurance = record.insurance;
            state.records.hospitalization = record.hospitalization;
            state.records.surgery = record.surgery;
        },
        saveQ3(state, record) {
            state.records.consult = record.consult;
        },
        returnQ1(state, record) {
            record.sex = state.records.sex;
            record.birthday = state.records.birthday;
        },
        returnQ2(state, record) {
            record.insurance = state.records.insurance;
            record.hospitalization = state.records.hospitalization;
            record.surgery = state.records.surgery;
        },
    },
    actions: {},
    modules: {},
});
