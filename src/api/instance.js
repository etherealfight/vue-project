import axios from 'axios'

const instance=axios.create({
    // baseURL:'http://121.196.154.219:8083',
    baseURL:'http://192.168.1.109:8083',
    timeout:5000
})
instance.interceptors.response.use(res=>res.data)

export{
    instance
}