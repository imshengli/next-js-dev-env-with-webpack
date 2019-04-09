## lazy-loading

* 动态导入：通过模块的内联函数调用来分离代码。

```js
button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  var print = module.default;
  print();
});
```
