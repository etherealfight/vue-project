import {instance} from './instance'
/**
 * 用户注册
 * @param {String} username 
 * @param {String} usermail 
 * @param {String} password 
 */
export const regist=(username,usermail,password)=>{
    return instance({
        url:'/user/regist',
        method:'GET',
        params:{
            username,
            usermail,
            password
        }
    })
}
/**
 * 用户登录
 * @param {String} username 
 * @param {String} password 
 */
export const login=(user)=>{
    return instance({
        url:'/user/login',
        method:'GET',
        params:{
            user,
        }
    })
}
/**
 * 检查邮箱激活状态
 * @param {String} userid 
 */
export const checkState=(userid)=>{
    return instance({
        url:'/user/checkState',
        method:'GET',
        params:{
            userid,
        }
    })
}