import {instance} from './instance'

export const regist=(username,usermail,password)=>{
    return instance({
        url:'/regist',
        method:'GET',
        params:{
            username,
            usermail,
            password
        }
    })
}

export const login=(username,password)=>{
    return instance({
        url:'/login',
        method:'GET',
        params:{
            username,
            password
        }
    })
}