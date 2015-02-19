'use strict';

var React = require('react/addons');
var NavItem = require('react-bootstrap/NavItem');
var Jumbotron = require('react-bootstrap/Jumbotron');

require('../../../styles/Appearance/Menu.less');

var Menu = React.createClass({
  propTypes: {
    contentsDialog: React.PropTypes.string.isRequired
  },
  render: function () {
    return (     
      <NavItem onClick={this.handleClick}>
        {this.props.label}
      </NavItem>
    );
  },
  handleClick: function(index){
    var jumbotron = (
      <Jumbotron>
        <h1>Select and configure your themes.</h1>
      </Jumbotron>        
    );
    React.render(jumbotron, document.getElementById(this.props.contentsDialog));
  }  
});

module.exports = Menu; 

