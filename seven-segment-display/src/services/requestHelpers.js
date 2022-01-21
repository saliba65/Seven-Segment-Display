import axios from "axios";
import { baseURL } from "../utils/constants/endpoints";

/*
  Request Helper para a requisicao da aplicao. Como temos apenas 1 endpoint, ele pega ela como a api base.
  Porem, este helper poderia ser reutilizado caso houvesse outras requisicoes com endpoits diferentes.
*/

const requestAPI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default requestAPI;
