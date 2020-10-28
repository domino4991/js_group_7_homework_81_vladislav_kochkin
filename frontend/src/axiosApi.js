import axios from 'axios';
import {urlApi} from "./constants";

export const axiosApi = axios.create({
    baseURL: urlApi
})