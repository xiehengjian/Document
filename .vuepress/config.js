module.exports = {
  "title": "白开水",
  "description": "The harder you work, the more you love, the luckier you are",
  "dest": "public",
  // "base":".",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    sidebarDepth:4,
    valineConfig: {
      appId: '4Tv2B62rQDPdsIv1aAsQhKy2-gzGzoHsz',// your appId
      appKey: 'TDydDfhh0qfNOQ6QFA21jvNG', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        text: '编程语言',
        ariaLabel: 'Language',
        items: [
          { text: 'Python', link: '/docs/language/python/' },
          { text: 'Golang', link: '/docs/language/golang/' }
        ]
      },
      {
        text: '前端',
        ariaLabel: 'front-end',
        items: [
          { text: 'Vue', link: '/docs/front-end/vue/' },
          { text: 'react', link: '/docs/front-end/react/' }
        ]
      },
      {
        text: '后端',
        ariaLabel: 'back-end',
        items: [
          { text: 'Django', link: '/docs/back-end/django/' },
          { text: 'FastAPI', link: '/docs/back-end/fastapi/' }
        ]
      },
      {
        text: '移动端',
        ariaLabel: 'mobile',
        items: [
          { text: 'Android', link: '/docs/mobile/android/' },
          { text: 'ios', link: '/docs/mobile/ios/' }
        ]
      },
      {
        text: '软件测试',
        ariaLabel: 'software-test',
        items: [
          { text: 'Appium', link: '/docs/software-test/Appium/' },
          { text: 'uiautomator2', link: '/docs/software-test/uiautomator2/' }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xiehengjian",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/qq_19978927",
            "icon": "reco-csdn"
          },
          {
            "text": "知乎",
            "link": "https://www.zhihu.com/people/bai-kai-shui-68-33/posts",
            "icon": "reco-zhihu"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/8238d75b6623",
            "icon": "reco-jianshu"
          },
          // {
          //   "text": "微信",
          //   "link": "https://www.jianshu.com/u/8238d75b6623",
          //   "icon": "reco-wechat"
          // },
        ]
      }
    ],
    sidebar:  'auto',
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "others"
      // },
      // "tag": {
      //   "location": 3,
      //   "text": "Tag"
      // }
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "白开水",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}