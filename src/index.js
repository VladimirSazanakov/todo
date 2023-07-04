import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


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