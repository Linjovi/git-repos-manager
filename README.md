## git-repos-manager[![npm](https://img.shields.io/npm/v/yoso.svg?maxAge=2592000)](https://www.npmjs.com/package/git-repos-manager)
[中文文档](./README_zh.md)

This is a tool that allows you to manage multiple git rspositories at once.

## Install

```bash
$ npm install -g git-repos-manager
```
## Usage

```bash
$ grm
```
Open ```localhost:3000```
![](https://raw.githubusercontent.com/Linjovi/myPic/master/img/20190802175751.png)
Enter the full path to search, and you can see all git repositories under this path. After selecting the repositories to operate, enter git command to run.
The results of the command execution can be seen in the shell log.

## Built With
- [mrgx](https://github.com/brizer/multi-repo-git) - The batch operation used
- [nest.js](https://github.com/nestjs/nest) - BFF framework
- [next.js](https://github.com/zeit/next.js) - SSR franework