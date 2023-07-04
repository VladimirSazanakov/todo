import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {
  const todoData = [
    { label: 'Drink Coffe', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false }
  ]

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>
  const WelcomeBox = <span>Welcome Back</span>
  return (
    <div>
      <span>{(new Date().toString())} </span>
      {isLoggedIn ? WelcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}


ReactDom.render(<App />, document.getElementById('root'));