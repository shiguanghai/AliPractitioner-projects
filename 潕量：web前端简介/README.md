## 潕量：web前端简介

### 作业需求

参考

- webpack 官网demo https://webpack.js.org/
- Fusion Design Pro 示例项目 https://fusion.design/mc/detail/728#/dashboard/analysis

![image.png](https://i.loli.net/2021/03/17/pQCDN5Fs2jVhw4M.png)

```shell
git clone https://github.com/bindoon/mid-practice.git
cd first
```
进入 first 目录

作业1：

深入 webpack loader @alifd/next-theme-loader 的工作原理，通过webpack 配置的方式，把导航的背景色改成橙色 #FF6A00 (@alifd/next-theme-loader  地址 [https://github.com/alibaba-fusion/next-theme-loader](https://github.com/alibaba-fusion/next-theme-loader)）

作业2：

- 修改 webpack 配置，npm run build 后让 build/pages/ 目录的 js 不被压缩（代码可读）。
- 并且通过修改编译后 JS 代码 build/pages/index.js，在文字后面手动添加一个 button 按钮，如右图所示

## 项目

### 开发环境依赖

- `nodejs`: ~4.4.0

### 本地开发

#### 开发调试

```
npm run start
```

#### 打包

```
npm run build
```

