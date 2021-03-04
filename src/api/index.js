import {
    instance
} from './instance'
/**
 * 用户注册
 * @param {String} username 
 * @param {String} usermail 
 * @param {String} password 
 */
export const regist = (username, usermail, password) => {
    return instance({
        url: '/user/regist',
        method: 'GET',
        params: {
            username,
            usermail,
            password
        }
    })
}
/**
 * 用户登录
 * @param {String} userid 
 * @param {String} password 
 */
export const login1 = (userid, password) => {
    return instance({
        url: '/user/login',
        method: 'GET',
        params: {
            userid,
            password
        }
    })
}
/**
 * 用户登录
 * @param {String} usermail 
 * @param {String} password 
 */
export const login2 = (usermail, password) => {
    return instance({
        url: '/user/login',
        method: 'GET',
        params: {
            usermail,
            password
        }
    })
}
/**
 * 检查邮箱激活状态
 * @param {String} userid 
 */
export const checkState = (userid) => {
    return instance({
        url: '/user/checkState',
        method: 'GET',
        params: {
            userid,
        }
    })
}
/**
 * 
 * @param {String} cuurrentPage 
 */
export const searchData = (currentPage) => {
    return instance({
        url: '/info/findrewardinfo',
        method: 'GET',
        params: {
            currentPage
        }
    })
}
/**
 * 发布悬赏
 * @param {String} userid 
 * @param {String} rewardinfo 
 * @param {String} images 
 */
export const publishReward = (userid, rewardinfo, images) => {
    return instance({
        url: '/info/updateinfo',
        method: 'GET',
        params: {
            userid,
            rewardinfo,
            images
        }
    })
}