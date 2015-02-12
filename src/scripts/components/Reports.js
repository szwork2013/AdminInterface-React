'use strict';

var React = require('react/addons');
var NavItem = require('react-bootstrap/NavItem');
var Jumbotron = require('react-bootstrap/Jumbotron');

require('../../styles/Reports.less');

var Reports = React.createClass({
  propTypes: {
    jumbotronId: React.PropTypes.string.isRequired
  },
  getMenus: function(){
     return [
     ];
  },
  render: function () {
    var menus = this.getMenus();
    return (     
      <NavItem onClick={this.handleClick}>
        {this.props.label}
      </NavItem>
    );
  },
  handleClick: function(index){
    var jumbotron = (
      <Jumbotron>
        <h1>View reports, updates and errors.</h1>
      </Jumbotron>        
    );
    React.render(jumbotron, document.getElementById(this.props.jumbotronId));
  }  
});

module.exports = Reports; 

