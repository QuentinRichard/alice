import api from "@/api";
import types from "../types"


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
  mutations: {
    [types.GEORISKS_SET_STATE](state: any, data: any) {
      state.data = data.values.data.data;
      state.pagination.nbResult = data.values.data.results;
      state.pagination.page = data.page;
      state.pagination.nbPage = data.values.data.total_pages;
    },
  },
  actions: {
     [types.GEORISKS_ACTION_GET]: async function({ commit }: { commit: any }, filter: any) {
      const values = await api.getGeoRisks(filter.searchId, filter.page);
      commit(types.GEORISKS_SET_STATE, {filter: filter.searchId, values, page: filter.page});
    },
  },
};
