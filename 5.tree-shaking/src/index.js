import { square } from './math.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = [
    'Hello webpack!',
    '5 squared is equal to ' + square(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
