import React from 'react';

var Todo = React.createClass({
  render: function(){
    var {id, task} = this.props

    return(
      <div>
        {id}: {task}
      </div>
    )
  }
});

module.exports = Todo;
