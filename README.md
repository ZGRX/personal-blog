# 觅食指南

由于学校食之力式微，越来越多窗口关闭，导致学校美味的食物越来越少，越来越多的人选择外卖和拼好饭。我看不下去了，作为一名学校的资深小饕，出于记录和指引下学期新同学觅食的想法，写了这个觅食指南

线上地址：

```text
https://zgrx.github.io/personal-blog/
```

## 当前内容

目前主要记录四个餐厅：

- 龙山厅
- 凤凰厅
- 天烛厅
- 东岳厅

## 内容结构

- `docs/index.md`：博客首页
- `docs/about.md`：关于页
- `docs/life/`：餐厅记录页面和图片目录
- `docs/.vitepress/config.mts`：VitePress 配置、导航和侧边栏
- `docs/.vitepress/theme/`：站点样式和页面切换动画

## 本地运行

第一次运行前安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

因为站点配置了 `base: '/personal-blog/'`，本地预览时访问：

```text
http://localhost:5173/personal-blog/
```

构建静态文件：

```bash
npm run build
```

## 发布

代码推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。

常用流程：

```bash
git status
git add <changed-files>
git commit -m "update canteen blog"
git push
```
