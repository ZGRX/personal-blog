import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/personal-blog/',
  title: '觅食指南',
  description: '由于学校食之力式微，越来越多窗口关闭，导致学校美味的食物越来越少，越来越多的人选择外卖和拼好饭。鄙人深感痛心，作为一名学校的资深小饕，出于记录和指引下学期新同学觅食的想法，写了这个觅食指南',
  lang: 'zh-CN',
  markdown: {
    config(md) {
      const defaultImageRender = md.renderer.rules.image
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet('loading', 'lazy')
        tokens[idx].attrSet('decoding', 'async')
        return defaultImageRender
          ? defaultImageRender(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  },
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
