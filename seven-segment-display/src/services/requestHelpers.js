import axios from "axios";
import { baseURL } from "../utils/constants/endpoints";

const requestAPI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default requestAPI;
