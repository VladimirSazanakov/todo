import React, {Component} from 'react';
import ReactDom from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
  constructor(){
    super()
  };
  
  state ={ 
    todoData: [
    { label: 'Drink Coffe', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]
};

deleteItem = (id) => {
  console.log(id);
  this.setState(({todoData})=>{
    const idx = todoData.findIndex((el) => el.id == id);
    console.log(idx);
    //todoData.splice(idx, 1);
    const before = todoData.slice(0, idx);
    const after = todoData.slice(idx +1);
    const newArray = [...before, ...after];

    return {todoData: newArray};
  })
}

render(){
  
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={this.state.todoData}
        onDeleted={this.deleteItem} />

    </div>
  )
      }
}

//export default App;