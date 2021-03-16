# 便捷校园项目

## 项目简介
这一项目主要是面向学习群体，主要实现了查询指定学习资源或悬赏信息，学习资源（包括文件，视频）的发布和下载功能，同时提供评论功能，通过问题的发布和评论形成一个学习区。在同层次下有一个悬赏区，用于学习问题和生活问题的悬赏发布（因时间问题，暂时没有实现聊天功能）,在实现注册功能的时候我们使用了邮箱验证，注册成功之后便可通过用户账号或用户邮箱进行登录。

### 需求分析
1.注册登录 √
2.新闻展示 √
3.悬赏展示 √
4.悬赏发布 √
5.悬赏接取
6.聊天功能
7.学习资源查看下载 √
8.学习资源发布 √
9.学习区评论发布与查看 √

### 设计参考
百度贴吧+闲鱼

### 前端技术栈
vue全家桶(vue vue-router vuex)

axios swiper better-scroll

### 项目预览

预览地址：http://cccccjy.top/dist

为保证体验，pc端请打开F12，使用手机模式进行预览：

可以使用以下账号：

用户名:37974253 密码:123456

### 界面展示

1.登陆注册：

![Snipaste_2021-03-15_23-45-18](https://user-images.githubusercontent.com/60640545/111252056-4dbf8b80-864b-11eb-8142-115cf762b6b6.jpg)

![Snipaste_2021-03-15_23-46-39](https://user-images.githubusercontent.com/60640545/111252065-531cd600-864b-11eb-924f-77287b805575.jpg)

2.首页：

![image](https://user-images.githubusercontent.com/60640545/111260951-a3506400-865c-11eb-8ef7-79799b6500b4.png)

3.新闻详情：

![image](https://user-images.githubusercontent.com/60640545/111261023-c67b1380-865c-11eb-9d9e-7ed5893fc041.png)

4.小帮手：

![image](https://user-images.githubusercontent.com/60640545/111269138-28da1100-8669-11eb-970c-88aabb3533b9.png)

利用animation实现下拉隐藏搜索栏上拉重新显示效果

![image](https://user-images.githubusercontent.com/60640545/111269182-3abbb400-8669-11eb-9618-dda318a39251.png)

左右滑动可在悬赏平台和学习资源平台间进行切换

![image](https://user-images.githubusercontent.com/60640545/111269278-5de66380-8669-11eb-894d-70a8813fbc41.png)

点击悬赏正文或图片部分进入悬赏详情页（留言聊天与接取功能暂未实现）



点击学习资源正文或图片部分进入学习资源详情页

![image](https://user-images.githubusercontent.com/60640545/111270219-8e7acd00-866a-11eb-8502-1d203ff74cb5.png)


点击视频列表相应视频可进入视频播放页播放相应视频，点击视频播放页视频列表可切换视频播放

![image](https://user-images.githubusercontent.com/60640545/111270599-06e18e00-866b-11eb-8c0c-3c116cb198fb.png)

学习资源详情页可发表评论进行交流，也可删除自己发布的评论

![image](https://user-images.githubusercontent.com/60640545/111270496-e580a200-866a-11eb-8363-51ba29066093.png)

点击个人介绍部分的头像或用户名区域即可根据用户id跳转到相应的用户主页

![Snipaste_2021-03-16_15-24-21](https://user-images.githubusercontent.com/60640545/111271756-9a678e80-866c-11eb-8ebe-cf19a924be20.jpg)
![Snipaste_2021-03-16_15-24-34](https://user-images.githubusercontent.com/60640545/111271761-9b98bb80-866c-11eb-9d43-224424e6a2b9.jpg)
![Snipaste_2021-03-16_15-24-43](https://user-images.githubusercontent.com/60640545/111271766-9d627f00-866c-11eb-9dcf-f4a4d0c064e8.jpg)

用户个人主页，可供登录用户进行发布删除以及查看自己发布的悬赏与学习资源信息

![Snipaste_2021-03-16_15-37-35](https://user-images.githubusercontent.com/60640545/111273558-ef0c0900-866e-11eb-9172-9c73944f3ce5.jpg)
![Snipaste_2021-03-16_15-37-46](https://user-images.githubusercontent.com/60640545/111273566-f206f980-866e-11eb-9fff-87b5fd141510.jpg)

悬赏发布页，输入悬赏正文以及悬赏图片点击发布按钮进行发布：

![Snipaste_2021-03-16_15-52-21](https://user-images.githubusercontent.com/60640545/111274354-dcde9a80-866f-11eb-898b-83f4580db29e.jpg)

学习资源发布页，输入学习资源正文选择学习资源图片以及视频与文件后点击发布按钮进行发布：

![Snipaste_2021-03-16_15-56-22](https://user-images.githubusercontent.com/60640545/111274978-99d0f700-8670-11eb-82e4-bf17f6f57125.jpg)

聊天列表页面

![image](https://user-images.githubusercontent.com/60640545/111275645-53c86300-8671-11eb-93fa-e484dfed96a5.png)

聊天详情页面（通信功能尚未实现）

![image](https://user-images.githubusercontent.com/60640545/111275690-62af1580-8671-11eb-904f-7a79b1f3b67f.png)

个人资料页面，可修改用户名，头像等个人信息，点击头像可进入个人主页，点击退出登录可注销登录信息回到登录页面

![Snipaste_2021-03-16_16-07-04](https://user-images.githubusercontent.com/60640545/111276061-e1a44e00-8671-11eb-9eca-bc9ace841bb2.jpg)







