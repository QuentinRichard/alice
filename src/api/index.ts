import client from "./client";
import router from "@/router";

const { get } = client;

async function call(method: any, uri: string) {
  try {
    return await method(uri);
  } catch (err) {
    console.log(err);
    router.push('/error');
  }
}

const api = {
  getGeoRisks: (name: string, page = 1) => {
    return call(get, `/api/v1/installations_classees?code_insee=${name}&page_size=5&page=${page}&rayon=10000`);
  },
  getCommunitySafetyPlans : (longitude: number, latitude: number, page = 1) => {
    return call(get, `/api/v1/gaspar/pcs?latlon=${longitude}%2C${latitude}&page=${page}&page_size=5&rayon=10000`);
  },
};

export default api;
