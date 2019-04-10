## shimming

处理不符合规范的模块：
如第三方库可能引入全局依赖，或者需要导出全局变量

#### 引入全局变量

```
new webpack.ProvidePlugin({
  _: 'lodash'
})
```

```
new webpack.ProvidePlugin({
  join: ['lodash', 'join']
})
```

#### imports-loader

复写 this
```
module: {
  rules: [
    {
      test: require.resolve('index.js'),
      use: 'imports-loader?this=>window'
    }
  ]
},
```

#### exports-loader

没试验成功
```js
module: {
  rules: [
    {
      test: require.resolve('./src/globals.js'),
      use: 'exports-loader?file,parse=helper.parse'
    }
  ]
},
```
