import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: '觅食指南',
  description: '由于学校食之力式微，越来越多窗口关闭，导致学校美味的食物越来越少，越来越多的人选择外卖和拼好饭。我看不下去了，作为一名学校的资深小饕，出于记录和指引下学期新同学觅食的想法，写了这个觅食指南',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '餐厅记录', link: '/life/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/life/': [
        {
          text: '餐厅记录',
          items: [
            { text: '龙山厅★★★', link: '/life/longshan' },
            { text: '凤凰厅★★★★★', link: '/life/fenghuang' },
            { text: '天烛厅★★★★', link: '/life/tianzhu' },
            { text: '东岳厅★★★★★', link: '/life/dongyue' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZGRX' }
    ]
  }
})
