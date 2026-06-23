# Ricey 的个人博客

这是一个用 VitePress 搭建的个人博客，用来记录生活、学校餐厅体验、学习笔记和一些日常想法。

线上地址：

```text
https://zgrx.github.io/personal-blog/
```

## 内容结构

- `docs/index.md`：博客首页
- `docs/about.md`：关于页
- `docs/life/`：生活笔记，目前主要记录学校餐厅
- `docs/study/`：学习笔记
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
git commit -m "update blog"
git push
```
