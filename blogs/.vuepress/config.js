/*
 * @Author: your name
 * @Date: 2020-07-31 11:19:20
 * @LastEditTime: 2020-08-15 18:13:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vuepress/docs/.vuepress/config.js
 */ 
module.exports = {
    title:"白开水",
    description:"个人博客",
    theme: 'reco',
    //"base":"./",

    themeConfig: {
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },
      sidebar:  'auto',
        nav: [
          { text: '首页', link: '/1' },
          {
            text: '编程语言',
            ariaLabel: 'Language',
            items: [
              { text: 'Python', link: '/language/python/' },
              { text: 'Golang', link: '/language/golang/' }
            ]
          },
          {
            text: '前端',
            ariaLabel: 'front-end',
            items: [
              { text: 'Vue', link: '/front-end/vue/' },
              { text: 'react', link: '/front-end/react/' }
            ]
          },
          {
            text: '后端',
            ariaLabel: 'back-end',
            items: [
              { text: 'Django', link: '/back-end/django/' },
              { text: 'FastAPI', link: '/back-end/fastapi/' }
            ]
          },
          {
            text: '移动端',
            ariaLabel: 'mobile',
            items: [
              { text: 'Android', link: '/mobile/android/' },
              { text: 'ios', link: '/mobile/ios/' }
            ]
          },
          {
            text: '软件测试',
            ariaLabel: 'software-test',
            items: [
              { text: 'Appium', link: '/software-test/Appium/' },
              { text: 'uiautomator2', link: '/software-test/uiautomator2/' }
            ]
          },
          { text: '闲言碎语', link: '/talk/' },
        ]
      }
}