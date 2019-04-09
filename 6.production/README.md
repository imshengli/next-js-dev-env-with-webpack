## production

#### webpack-merge

```
npm install --save-dev webpack-merge
```

#### Minification

UglifyJSPlugin
babel-minify-webpack-plugin
ClosureCompilerPlugin

#### source-map

```
devtool: 'source-map',
```

和 uglifyjs-webpack-plugin 中的 source-map 有什么区别？
两个都需要配置吗？

#### 指定环境

```js
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})
```

#### Split CSS

```
npm install --save-dev mini-css-extract-plugin
```

