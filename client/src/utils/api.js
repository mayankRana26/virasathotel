import axios from "axios";

const API = axios.create({
  baseURL: "https://virasathotel-server.onrender.com/api"
});

export default API;