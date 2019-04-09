// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }).catch( error => 'An error occurred while loading the component');
// }

// async function getComponent() {
//   var element = document.createElement('div');
//   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });

import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var button = document.createElement('button');
  button.innerHTML = 'Click me and look at the console!';
  var br = document.createElement('br');
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });
  return element;
}

document.body.appendChild(component());
