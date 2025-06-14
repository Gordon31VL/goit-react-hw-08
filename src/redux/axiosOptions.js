import axios from "axios";

//default url for auth and contacts operations
export const apiConnectionUrl = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_DEFAULT_URL,
});