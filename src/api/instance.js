import axios from 'axios'

const instance=axios.create({
    baseURL:'http://192.168.1.105:8082',
    timeout:5000
})
instance.interceptors.response.use(res=>res.data)

export{
    instance
}