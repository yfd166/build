module.exports = {
    title: '主场服务系统',
    description: '欢迎来到我的博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    theme:"reco",
    themeConfig:{
        // 配置logo
        logo:'/favicon.ico',

        // 开启博客模式
        // type:'blog',
        
        // nav 配置页面右上方导航栏
        nav:[
            {
                text:"首页",
                items:[
                    {text:'主场用户指南',link:'/guide/homes/'},
                    {text:'搭建商用户指南',link:'/guide/builds/'}
                ]
            },
            {
                text:"立即试用",
                items:[
                    {text:"主场",link:"https://builds.dataexpo.com.cn/login/home"},
                    {text:"主办",link:"https://mp.dataexpo.com.cn/user/login"}
                ]
            }
        ],
        // 左侧边栏（全局侧边栏），多文章管理
        sidebar:{
            '/guide/homes/':[
                '',
            ],
            '/guide/builds/':[
              '',
              'register',
              'login',
              'builder'
            ]
            // '/':[
            //     '',
            // ] 
        },
        // subSidebar:'auto',

        // 最后更新时间
        lastUpdated: '最后更新时间：', // string | boolean
    },
    locales: {
        "/": {
          lang: "zh-CN",
        },
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
          width: '300px', // 默认 260px
          title: '消息提示',
          body: [
            {
              type: 'title',
              content: '欢迎添加您的私人客服 🎉🎉🎉',
              style: 'text-aligin: center;'
            },
            {
              type: 'image',
              src: '/wechat.png'
            }
          ],

        }]
      ]
}