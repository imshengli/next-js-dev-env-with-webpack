import './config';
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  console.log(__webpack_public_path__, a);

  return element;
}

document.body.appendChild(component());
