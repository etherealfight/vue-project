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
 * 悬赏页面初始化
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
 * 根据关键字查询指定悬赏
 * @param {String} production 
 * @param {String} cuurrentPage 
 */
export const searchReward1 = (production, currentPage) => {
    return instance({
        url: '/info/findrewardbystr',
        method: 'GET',
        params: {
            production,
            currentPage
        }
    })
}
/**
 * 根据用户名查询指定悬赏
 * @param {String} production 
 * @param {String} cuurrentPage 
 */
export const searchReward2 = (production, currentPage) => {
    return instance({
        url: '/info/findrewardbyName',
        method: 'GET',
        params: {
            production,
            currentPage
        }
    })
}
/**
 * 根据悬赏id进入悬赏详情页
 * @param {String} commentid 
 * @param {String} cuurrentPage 
 */
export const toRewardDetail = (commentid,hits) => {
    return instance({
        url: '/info/findrewardbyid',
        method: 'GET',
        params: {
            commentid,
            hits
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
/**
 * 学习页面初始化
 * @param {String} cuurrentPage 
 */
export const searchStudy = (currentPage) => {
    return instance({
        url: '/study/findstudyinfo',
        method: 'GET',
        params: {
            currentPage
        }
    })
}
/**
 * 根据关键字查询指定学习资源
 * @param {String} production 
 * @param {String} cuurrentPage 
 */
export const searchLearning1 = (production, currentPage) => {
    return instance({
        url: '/study/findstudybystr',
        method: 'GET',
        params: {
            production,
            currentPage
        }
    })
}
/**
 * 根据用户名查询指定学习资源
 * @param {String} production 
 * @param {String} cuurrentPage 
 */
export const searchLearning2 = (production, currentPage) => {
    return instance({
        url: '/study/findstudybyName',
        method: 'GET',
        params: {
            production,
            currentPage
        }
    })
}
/**
 * 根据学习id进入学习详情页
 * @param {String} commentid 
 * @param {String} cuurrentPage 
 */
export const toStudyDetail = (studyplatid,hits) => {
    return instance({
        url: '/study/findrewardbyid',
        method: 'GET',
        params: {
            studyplatid,
            hits
        }
    })
}
/**
 * 发布学习资源
 * @param {String} userid 
 * @param {String} rewardinfo 
 * @param {String} images 
 */
export const publishLearning = (userid, studyinfo, images) => {
    return instance({
        url: '/study/updatestudy',
        method: 'GET',
        params: {
            userid,
            studyinfo,
            images
        }
    })
}