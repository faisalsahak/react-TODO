import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import TodoSearch from './TodoSearch.jsx';
import uuid from 'node-uuid'


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          task: "walk the dog"
        },
        {
          id: uuid(),
          task: "clean the yard"
        },
        {
        id: uuid(),
        task: "go for a jog"
        },
        {
          id: uuid(),
          task: "get a job"
        }
      ]
    }
  },
  handleAddTodo: function(task){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          task: task
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos} />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoSearch onSearch={this.handleSearch}/>
      </div>
    )
  }
});

module.exports = TodoApp;
