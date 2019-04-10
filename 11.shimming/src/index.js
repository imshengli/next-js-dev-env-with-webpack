
import { file, parse } from './globals.js';

function component() {
  var element = document.createElement('div');

  this.alert('Hmmm, this probably isn\'t a great idea...')

  console.log(file, parse);
  return element;
}

document.body.appendChild(component());
