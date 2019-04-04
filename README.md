TypeScript Cypress Jest Demo
===========================

由于cypress和jest都使用定义了一些同名的全局函数，比如`describe/expect`等，所以会有冲突，
解决办法是用两个tsconfig.json，把两边的定义分开。

```
npm install
npm test
```
