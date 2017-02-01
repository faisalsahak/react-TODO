import React from 'react'

var TodoSearch = React.createClass({


    handleSubmit: function(){

    },

    handleSearch(){
      var showCompleted = this.refs.showCompleted.checked;
      var searchText = this.refs.searchBox.value;

      this.props.onSearch(showCompleted, searchText)
    },

  render: function(){


    return(
      <div>
        <div>
          <input type='search' ref="searchBox" placeholder='Search Todos' onChange={this.handleSubmit} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show Completed
          </label>
        </div>
      </div>
    )
  }
})

module.exports = TodoSearch;
