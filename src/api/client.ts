import axios, { AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://www.georisques.gouv.fr",
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
