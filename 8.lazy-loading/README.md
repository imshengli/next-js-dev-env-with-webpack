## lazy-loading

有三种常用的代码分离方法：

* 入口起点：使用 entry 配置手动地分离代码。
* 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
* 动态导入：通过模块的内联函数调用来分离代码。

#### chunk

```js
optimization: {
  splitChunks: {
    cacheGroups: {
      common: {
        test: /[\\/]node_modules[\\/]/,
        name: 'common',
        chunks: 'initial',
        priority: 2,
        minChunks: 2,
      },
    }
  }
},
```

#### 性能分析

```
"analyse": "webpack --profile --json > stats.json",
```
