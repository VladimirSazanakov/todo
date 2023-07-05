import React, {Component} from 'react';
import ReactDom from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
  constructor(){
    super()
  };

  maxId = 100;

  state ={
    todoData: [
      this.createTodoItem("Drink coffe"),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
};

createTodoItem(label){
  return {
    label,
    important: false,
    done: false,
    id: this.maxId++,
  }
}

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

addItem = (text) => {
  console.log('AddItem', text);
  const newItem = this.createTodoItem(text);
  //this.maxId +=1;
  //generate id ?
  // then create object Item
  // add element in massive

  this.setState(({todoData})=>{
    const newArray = [...todoData, newItem];
    return {todoData: newArray};
  })

}

onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el)=> el.id == id);
    const oldItem = arr[idx];
    // update object
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    //construct new array
    const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

    return newArray;
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{

      const newArray = this.onToggleProperty(todoData, id, 'important');

      return {
        todoData: newArray
      }
    })
    console.log('On Important', id);
  };

onToggleDone = (id) => {
  this.setState(({todoData})=>{

    const newArray = this.onToggleProperty(todoData, id, 'done');

    return {
      todoData: newArray
    }
  })
  console.log('On Done', id);
};

render(){
  const {todoData} = this.state;
  const doneCount = todoData.filter((el)=> el.done).length;
  const todoCount = todoData.length - doneCount;
  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}
        onDeleted={this.deleteItem}
        onImportant = {this.onToggleImportant}
        onDone = {this.onToggleDone} />
        <ItemAddForm onAddItem={this.addItem}/>

    </div>
  )
      }
}

//export default App;
