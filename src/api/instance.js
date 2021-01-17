import axios from 'axios'

const instance=axios.create({
    baseURL:'http://121.196.154.219:8082/',
    timeout:5000
})
instance.interceptors.response.use(res=>res.data)

export{
    instance
}