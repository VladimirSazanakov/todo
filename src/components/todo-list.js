import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = ['learn React', 'Build Awesome App', 'Drink coffe']
  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;