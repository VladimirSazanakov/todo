import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () =>{
  const items = ['learn React', 'Build Awesome App', 'Drink coffe']
  return (
    <ul>
    <li>{items[0]} </li>
    <li>{items[1]}</li>
    <li>{items[2]}</li>
  </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  )
}

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  };
  return (
    <input 
    style = {searchStyle} placeholder={searchText} ></input>
  )
}

const App = () => {
  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>
  const WelcomeBox = <span>Welcome Back</span>
  return (
    <div>
      <span>{(new Date().toString())} </span>
      {isLoggedIn ? WelcomeBox : loginBox}
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  )
}


ReactDom.render(<App/>, document.getElementById('root'));