import axios from 'axios'
// import CryptoJS from "crypto-js";
// import { axiosResponseInterceptor, axiosRequestInterceptor } from './aes-cli';
const backendUrl = 'http://localhost:3000/api/'

const apiCli = axios.create({
  baseURL: backendUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// apiCli.interceptors.response.use(axiosResponseInterceptor)

const dataResponseInterceptor = (response) => {
  const { data, status: statusCode } = response
  return { data, statusCode, success: true }
}

apiCli.interceptors.response.use((response) => {
  return dataResponseInterceptor(response)
}, (error) => {
  const { response } = error
  if (!response) {
    error.message = 'Error de conexion con el servidor.'
    return Promise.reject(error)
  } else {
    const code = response.status
    const data = response.data
    // const originalRequest = response.config;

    if (code === 401) {
      localStorage.clear()
    }

    error.message = data.message

    return Promise.reject(error)
  }
})

const authRequestInteceptor = (request) => {
  // let tokenEncrypt = localStorage.getItem("sessionId");
  // if (tokenEncrypt) {
  //     //Proceso de validacion
  //     var bytes = CryptoJS.AES.decrypt(localStorage.getItem("sessionId"), process.env.REACT_APP_AES_CRYPTO_LOCAL);
  //     var token = bytes.toString(CryptoJS.enc.Utf8);
  //     request.headers["Authorization"] = "Bearer " + token;
  // }
  return request
}

// apiCli.interceptors.request.use(axiosRequestInterceptor);

apiCli.interceptors.request.use(authRequestInteceptor)

export default apiCli
