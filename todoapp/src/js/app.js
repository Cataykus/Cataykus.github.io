import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from "./components/item-status-filter";
import ItemAddForm from "./components/item-add-form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: 'Drink Coffee', done: false, important: false, id: 1 },
        { label: 'Make Awesome App', done: false, important: true, id: 2 },
        { label: 'Have a lunch', done: false, important: false, id: 3 }
      ],
      filter: "",
      filterMode: "all"
    };
    this.maxId = 100;
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => { return el.id == id });
        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
        return {
          todoData: newArray
        };
      });
    };
    this.addItem = (value) => {
      if(value == "") return;
      const newItem = {
        label: value,
        important: false,
        done: false,
        id: this.maxId++
      };
      this.setState(({ todoData }) => {
        const newArray = [...todoData, newItem]
        return {
          todoData: newArray
        }
      });
    };
    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important")
        }
      });
    };
    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "done")
        }
      });
    };
    this.onFilter = (text) => {
      this.setState({
        filter: text
      });
    };
    this.onFilterMode = (text) => {
      this.setState({
        filterMode: text
      });
    };
    this.toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((el) => { return el.id == id });
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };
    this.filterData = (data, text) => {
       return data.filter((item)=>{
        return item.label.toUpperCase().indexOf(text.toUpperCase()) > -1;
       });
    };
    this.filterMode = (data, mode) =>{
      if(mode == "done") return data.filter((el) => el.done);
      else if (mode == "active") return data.filter((el) => !el.done);
      else if (mode == "all") return data;
    };
  };

  render() {
    let { todoData, filter, filterMode } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    if (filter != "") {
      todoData = this.filterData(todoData, filter);
    }
    todoData = this.filterMode(todoData, filterMode);
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onFilter={this.onFilter} />
          <ItemStatusFilter onFilterMode = { this.onFilterMode }/>
        </div>
        <TodoList todos={ todoData } onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
};
