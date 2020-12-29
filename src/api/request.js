import axios from 'axios'
//对axios进行单独的配置操作（封装前置的url基准地址和请求头信息）
const instance = axios.create({
    baseURL:"https://m.maizuo.com",
    headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606750743682796720848897"}',
        'X-Host': 'mall.film-ticket.film.list'
    }
});
// 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(config);
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     console.log(response);
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });
export default instance