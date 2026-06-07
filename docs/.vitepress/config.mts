import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: 'Ricey 的学习博客',
  description: '记录 Linux、Git、Rust 和 rCore 的学习过程',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '学习笔记',
          items: [
            { text: '第一篇：为什么写博客', link: '/posts/why-blog' },
            { text: 'Git 学习路线', link: '/posts/git-learning-path' },
            { text: 'Rust 学习路线', link: '/posts/rust-learning-path' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZGRX' }
    ]
  }
})
