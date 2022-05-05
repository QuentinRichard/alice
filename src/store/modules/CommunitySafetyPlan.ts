import api from "@/api";
import types from "@/store/types"

export default {
  namespaced: false,
  state: {
    data: {},
    pagination: {
      nbResult: 0,
      page: 1,
      nbPage: 0,
      pageSize: 5,
    },
  },
  getters: {},
  mutations: {
    [types.CSP_SET_STATE](state: any, data: any) {
      state.data = data.data.data.data;
      
      state.pagination.nbResult = data.data.data.results;
      state.pagination.nbPage = data.data.data.total_pages;
      state.pagination.page = data.page;
    },
  },
  actions: {
    async [types.CSP_ACTION_GET]({ commit }: { commit: any }, item: any) {
      const data = await api.getCommunitySafetyPlans(item.longitude, item.latitude, item.page);
      commit(types.CSP_SET_STATE, { data, page: item.page });
    },
  },
};
