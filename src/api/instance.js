import axios from 'axios'

const instance=axios.create({
    baseURL:'http://192.168.43.126:8080',
    timeout:5000
})
instance.interceptors.response.use(res=>res.data)

export{
    instance
}