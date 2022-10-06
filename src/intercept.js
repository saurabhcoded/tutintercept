import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
});

// Request Response & Error Handlers
const requestHandler = (request) => {
  request.headers.Authorization = "Bearer RequestToken";
  return request;
};
const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = "/login";
  }
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

// making use of Interceptor
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error)=>errorHandler(error)
)
customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error)=>errorHandler(error)
)


// Exporting the Interceptors 
export default customAxios;