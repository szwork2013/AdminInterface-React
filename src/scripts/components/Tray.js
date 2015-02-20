'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

require('../../styles/Tray.less');

var Tray = React.createClass({
  propTypes: {
     // This event disables the whole application
     toggleVisibleEvnt: React.PropTypes.func.isRequired  
  },  
  render: function () {
    var cssClasses = cx({
      'navbar-static-top' : true
    });   
    return (
      <Navbar id="Tray" className={cssClasses}>
        <Nav className="left">
          <NavItem>Add Content</NavItem>
          <NavItem>Find Content</NavItem>
        </Nav>
        <Nav className="right">
          <NavItem onClick={this.props.toggleVisibleEvnt}>Turn Admin Off</NavItem>
        </Nav>
      </Navbar>
      );
  }
});

module.exports = Tray; 

