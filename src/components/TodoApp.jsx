import React from 'react';
import TodoList from './TodoList.jsx';


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
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

  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
