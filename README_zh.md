## git-repos-manager[![npm](https://img.shields.io/npm/v/yoso.svg?maxAge=2592000)](https://www.npmjs.com/package/git-repos-manager)
这是一个可以对git仓库进行批量操作的工具。

## 安装

```bash
$ npm install -g git-repos-manager
```
## 使用

```bash
$ grm
```
打开```localhost:3000```进行操作
![](https://raw.githubusercontent.com/Linjovi/myPic/master/img/20190802175751.png)
输入全路径进行搜索，可以看到该路径下的全部git仓库。选中要操作的仓库后，输入git命令运行即可。
命令执行的结果可以在shell log中看到。

## 用到的框架
- [mrgx](https://github.com/brizer/multi-repo-git) - 使用的批量操作内核
- [nest.js](https://github.com/nestjs/nest) - 使用的BFF框架 
- [next.js](https://github.com/zeit/next.js) - 使用的服务端渲染框架