import React from 'react';
import ReactDom from 'react-dom';

const el = (
  <div>
  <h1>My Todo List</h1>
  <input placeholder='search'></input>
  <ul>
    <li>Learn React</li>
    <li>Build Awesome App</li>
  </ul>
  </div>
);

console.log(el);

ReactDom.render(el, document.getElementById('root'));