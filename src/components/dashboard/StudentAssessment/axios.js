import axios from "axios";

const instance = axios.create({
  baseURL: "https://scholarly-science.herokuapp.com/",
  responseType: "json",
});

export default instance;
