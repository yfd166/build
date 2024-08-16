module.exports = {
    title: '主场服务系统',
    description: '欢迎来到我的博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    theme:"reco",
    base:'/build/',
    themeConfig:{
        // 配置logo
        logo:'/favicon.ico',
        author: 'jack yuan',
        // 开启博客模式
        // type:'blog',
        
        // nav 配置页面右上方导航栏
        nav:[
            {
              text:"文档中心",link:'/guide/homes/',
            },
            {
              text:'搭建商用户指南',link:'/guide/builds/'
            },
            {
              text:"立即试用",link:"https://builds.dataexpo.com.cn/login/home"
            }
        ],
        // 左侧边栏（全局侧边栏），多文章管理
        sidebar:{
          // 配置侧边栏分组
            '/guide/homes/':[
                {
                  title: "入门必读",
                  collapsable: true,
                  children: [
                    '',
                    'init',
                    'admin'
                  ]
                },
                {
                  title: "填充资源库",
                  collapsable: true,
                  children: [
                    'resources/',
                    'resources/facilities',
                    'resources/templates',
                    'resources/staff',
                    'resources/receipt'
                  ]
                },
                {
                  title: "创建项目",
                  collapsable: true,
                  children: [
                    'project/create',
                    'project/basic',
                    'project/check'
                  ]
                }
            ],
            '/guide/builds/':[
              '',
              'register',
              'login',
              'builder',
              'order',
              'payment',
              'deposit',
              'invoice',
              'card'
            ]
            // '/':[
            //     '',
            // ] 
        },
        subSidebar:'auto',

        // 最后更新时间
        lastUpdated: '最后更新时间', // string | boolean
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
              src: '/build/wechat.jpg'
            }
          ],

        }],
        ['vuepress-plugin-export']
      ]
}