# 使用说明

利用 `vue-cli` 自动生成模板，目前加入了 `lib-flexible` 这个移动端适配方案。后期可以根据项目需要进一步配置，模板为单页面页面打包应用。我的本地环境是
```shell
	node -v
	v 7.10.0
	npm -v
	3.10.10
```
> 建议使用 [nvm](https://github.com/creationix/nvm) 来灵活配置 `node` 版本

## 目录结构

![Casecad](./docs/img/1.png)

* `/build` 构建代码
* `/config` 配置构建环境的代码
* `/dist` 打包后自动生成的代码
* `/docs` 项目详细说明文档
* `/node_modules` 项目依赖
* `/src` 源代码
* `/static` 静态文件
* `/test` `unit` `e2e` 等测试代码
* `/.babelrc`  [babel](https://babeljs.io/) 配置
* `/.editorconfig` 代码一致性开源项目，支持 `sublime text`  `atom` `vscode` `*strom` `xcode` 等常见编辑器和 `IDE`
* `/.eslintignore` 不需要代码检查的目录
* `/.eslintrc` [eslint](http://eslint.cn/)配置
* `/.gitignore` 不需要 `git` 追踪的目录
* `/.postcssrc` [postcss](https://github.com/michael-ciniawsky/postcss-load-config) 配置
* `/package.json` 项目元信息配置
* `/index.html` 单页面应用的唯一  `html`
* `/README`  项目介绍，即现在读到的内容
* `/yarn.lock` [yarn](https://yarnpkg.com/zh-Hans/) 辅助依赖管理



## 使用

### 下载依赖

``` shell
npm i 或者 yarn
```

### 运行

```shell
npm run dev
```

### 编译打包

```shell
npm run build
```

### 单元测试

```shell
npm run unit
```

### e2e 测试

```shell
npm run e2e
```

### 代码语法检测

```shell
npm run lint
```

> 此命令一般不会运行，配合编辑器插件可以实时查看
