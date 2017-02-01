import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import TodoSearch from './TodoSearch.jsx'


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          task: "walk the dog"
        },
        {
          id: 2,
          task: "clean the yard"
        },
        {
        id: 3,
        task: "go for a jog"
        },
        {
          id: 4,
          task: "get a job"
        }
      ]
    }
  },
  handleAddTodo: function(task){
    alert('new Todo: '+task)
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
