import React from 'react';
import TodoApp from './components/TodoApp.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
});


module.exports =  App;
