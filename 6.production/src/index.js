import { square } from './math.js';
import './index.css';

console.log(process.env.NODE_ENV);

function component() {
  var element = document.createElement('div');

  element.innerHTML = [
    'Hello webpack!',
    '5 squared is equal to ' + square(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
