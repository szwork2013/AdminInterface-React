'use strict';

var React = require('react/addons');
var NavItem = require('react-bootstrap/NavItem');
var Jumbotron = require('react-bootstrap/Jumbotron');

require('../../styles/People.less');

var People = React.createClass({
  propTypes: {
    jumbotronId: React.PropTypes.string.isRequired
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
        <h1>Manage user accounts, groups and permissions.</h1>
      </Jumbotron>        
    );
    React.render(jumbotron, document.getElementById(this.props.jumbotronId));
  }  
});

module.exports = People; 

