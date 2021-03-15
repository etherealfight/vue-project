import axios from 'axios'
/**
 * 设置拦截器
 */
const instance=axios.create({
    baseURL:'http://121.196.154.219:8083',
    timeout:5000
})
instance.interceptors.response.use(res=>res.data)

export{
    instance
}