import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import FilterButton from './Components/FilterButton';

var id = 0;

var sortTodos = (todoList) => {

  let completedTodos = todoList.filter( todo => todo.isComplete === true);
  let incompleteTodos = todoList.filter( todo => todo.isComplete === false);

  return incompleteTodos.concat(completedTodos);
}
class App extends Component {

  state = {
    allTodos : [],
    todos : [],
    isFilterActive : false
  }

  addNewTodo = (text) => {
    let updatedTodos = [...this.state.todos];
    //use .push to add elements to ending
    //use .unshift to add elements to beginning
    updatedTodos.unshift({
      id: id++,
      text: text,
      isComplete: false
    });
    this.setState({
      todos: updatedTodos,
      allTodos : updatedTodos
    });
  }

  markAsComplete = (id) => {
    let updatedTodos = this.state.todos.map( todo => {
        if(todo.id === id){
            todo.isComplete = true;
        }
        return todo;
    });
    
    updatedTodos = sortTodos(updatedTodos);
    
    this.setState({
      todos: updatedTodos,
      allTodos: updatedTodos
    });
  } 
  
  markAsIncomplete = (id) => {
    let updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id){
        todo.isComplete = false;
      }
      return todo;
    });
    
    updatedTodos = sortTodos(updatedTodos);
    
    this.setState({
        todos: updatedTodos,
        allTodos: updatedTodos
    });
  }
  
  filterByText = (text) => {
    if (text === "") {
      this.setState({
        todos: this.state.allTodos
      });
    }
    else{
      let updatedTodos = this.state.allTodos.filter( todo => todo.text.includes(text));
      this.setState({
        todos: updatedTodos
      });
    }
  }

  removeCompleted = () => {
    let updatedTodos = this.state.allTodos.filter( todo => todo.isComplete === false);
    this.setState({
      todos: updatedTodos,
      allTodos: updatedTodos
    });
  }

  toggleFilter = (e) => {
    e.target.classList.toggle("active");
    this.setState((prevState) => ({
      isFilterActive: !prevState.isFilterActive
    }));
  }

  render() {
    return (
      <Fragment>
        <AddTodo addNewTodo={this.addNewTodo} filterByText={this.filterByText} isFilterActive={this.state.isFilterActive} 
        removeCompleted={this.removeCompleted} />
        <FilterButton toggleFilter={this.toggleFilter} />
        <TodoList todos={this.state.todos} markAsComplete={this.markAsComplete} markAsIncomplete={this.markAsIncomplete}/>
      </Fragment>
    );
  }
}

export default App;
