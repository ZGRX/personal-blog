import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: 'Ricey 的博客',
  description: '记录生活、想法、学习笔记和成长过程',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/life/' },
      { text: '学习', link: '/study/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/life/': [
        {
          text: '生活笔记',
          items: [
            { text: '学校餐厅记录', link: '/life/campus-canteens' }
          ]
        }
      ],
      '/study/': [
        {
          text: '学习笔记',
          items: [
            { text: 'Git 学习路线', link: '/study/git-learning-path' },
            { text: 'rCore 学习路线', link: '/study/rcore-learning-path' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZGRX' }
    ]
  }
})
