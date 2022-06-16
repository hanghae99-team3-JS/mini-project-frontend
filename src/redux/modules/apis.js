import axios from "axios";
axios.defaults.withCredentials = true;


export default axios.create({
  baseURL: "http://3.39.161.93:5000"
})
