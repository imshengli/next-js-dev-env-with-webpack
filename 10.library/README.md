## webpack-numbers

```html
<script src="https://cdn.bootcss.com/lodash.js/4.17.11/lodash.js"></script>
```

#### 排除依赖

```js
externals: {
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
    root: '_'
  }
},
```

