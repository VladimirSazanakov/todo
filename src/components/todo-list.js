import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = ['learn React', 'Build Awesome App', 'Drink coffe']
  return (
    <ul>
      <li><TodoListItem label='Drink coffe' /></li>
      <li><TodoListItem label='Cleat Table' /></li>
      <li><TodoListItem label='Go to tualet' important /></li>
    </ul>
  );
};

export default TodoList;