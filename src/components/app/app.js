import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';
import ItemStatusFilter from '../item-status-filter';

const App = () => {
  const todoData = [
    { label: 'Drink Coffe', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>
  const WelcomeBox = <span>Welcome Back</span>
  return (
    <div className="todo-app">
      <span>{(new Date().toString())} </span>
      {isLoggedIn ? WelcomeBox : loginBox}
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}
        onDeleted={(id) => {
          console.log('del', id);
        }} />

    </div>
  )
}

export default App;