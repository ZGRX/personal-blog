# 学校餐厅记录

这是一个用 VitePress 搭建的学校餐厅记录博客，用来整理学校餐厅窗口图片、菜品体验和个人评价。

线上地址：

```text
https://zgrx.github.io/personal-blog/
```

## 当前内容

目前主要记录五个餐厅：

- 龙山厅
- 凤凰厅
- 天烛厅
- 泰山厅
- 傲徕厅

## 内容结构

- `docs/index.md`：博客首页
- `docs/about.md`：关于页
- `docs/life/`：餐厅记录页面和图片目录
- `docs/.vitepress/config.mts`：VitePress 配置、导航和侧边栏

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
