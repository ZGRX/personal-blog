import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: '学校餐厅记录',
  description: '记录学校餐厅窗口、菜品体验和个人评价',
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
            { text: '学校餐厅记录', link: '/life/campus-canteens' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZGRX' }
    ]
  }
})
