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
 * 修改用户信息
 * @param {String} 
 * @param {String} 
 */
export const updateUserinfo = (userid, username, gender, signature, introduction, imgurl) => {
    return instance({
        url: '/user/updateuserinfo',
        method: 'GET',
        params: {
            userid,
            username,
            gender,
            signature,
            introduction,
            imgurl
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
 * 根据用户名id指定悬赏
 * @param {String} userid 
 * @param {String} cuurrentPage 
 */
export const searchRewardbyid = (userid, currentPage) => {
    return instance({
        url: '/info/findAllRewards',
        method: 'GET',
        params: {
            userid,
            currentPage
        }
    })
}
/**
 * 根据悬赏id进入悬赏详情页
 * @param {String} commentid 
 * @param {String} cuurrentPage 
 */
export const toRewardDetail = (commentid, hits) => {
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
 * 删除悬赏
 * @param {String} commentid 
 */
export const deleteReward = (commentid) => {
    return instance({
        url: '/info/deleteinfo',
        method: 'GET',
        params: {
            commentid
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
 * 根据用户id查询指定学习资源
 * @param {String} userid 
 * @param {String} cuurrentPage 
 */
export const searchLearningbyid = (userid, currentPage) => {
    return instance({
        url: '/study/findAllStudy',
        method: 'GET',
        params: {
            userid,
            currentPage
        }
    })
}
/**
 * 根据学习id进入学习详情页
 * @param {String} studyplatid 
 * @param {String} hits 
 */
export const toStudyDetail = (studyplatid, hits) => {
    return instance({
        url: '/study/findstudybyid',
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
 * @param {String} videos 
 * @param {String} files 
 */
export const publishLearning = (userid, studyinfo, images, videos, files, videoname, filename) => {
    return instance({
        url: '/study/updatestudy',
        method: 'GET',
        params: {
            userid,
            studyinfo,
            images,
            videos,
            files,
            videoname,
            filename
        }
    })
}
/**
 * 删除学习资源
 * @param {String} studyplatid 
 */
export const deleteLearning = (studyplatid) => {
    return instance({
        url: '/study/deletestudy',
        method: 'GET',
        params: {
            studyplatid
        }
    })
}
/**
 * 根据id查询评论
 * @param {String} studyplatid 
 * @param {String} currentPage 
 */
export const findComment = (studyplatid, currentPage) => {
    return instance({
        url: "/study/findreplyinfo",
        method: 'GET',
        params: {
            studyplatid,
            currentPage
        }
    })
}
/**
 * 发布评论
 * @param {String} userid 
 * @param {String} username 
 * @param {String} replyinfo 
 * @param {String} studyplatid 
 * @param {String} headportrait 
 */
export const updatereply = (userid, username, replyinfo, studyplatid, headportrait) => {
    return instance({
        url: "/study/updatereply",
        method: 'GET',
        params: {
            userid,
            username,
            replyinfo,
            studyplatid,
            headportrait
        }
    })
}
/**
 * 根据删除评论
 * @param {String} replyid 
 */
export const deleteComment = (replyid) => {
    return instance({
        url: "/study/deletereply",
        method: 'GET',
        params: {
            replyid
        }
    })
}