import React from 'react';
import TodoApp from './TodoApp.jsx'

var AddTodo = React.createClass({

  handleSubmit: function(e){
    console.log("button press")
    e.preventDefault();
    var inputValue = this.refs.todoText.value;
    if(inputValue.length > 0){
      this.refs.todoText.value = '';
      this.props.handleAddTodo(inputValue)
    }else {
      this.refs.todoText.focus();
    }

  },

  render: function(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input ref='todoText' type= 'text' placeholder="add a todo" />
          <button className= "button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
