import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: 'Ricey 的博客',
  description: '记录生活、想法、学习笔记和成长过程',
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
          text: '生活记录',
          items: [
            { text: '第一篇：从今天开始记录生活', link: '/posts/start-life-blog' },
            { text: '一个普通下午', link: '/posts/ordinary-afternoon' },
            { text: '最近想留下的事', link: '/posts/recent-thoughts' }
          ]
        },
        {
          text: '学习笔记',
          items: [
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
