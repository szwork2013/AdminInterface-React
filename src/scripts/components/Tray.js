'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

require('../../styles/Tray.less');

var Tray = React.createClass({
  render: function () {
    var cssClasses = cx({
      'navbar-static-top' : true
    });   
    return (
      <Navbar id="Tray" className={cssClasses}>
        <Nav>
          <NavItem>Add Content</NavItem>
          <NavItem>Find Content</NavItem>
          <NavItem>Turn Admin Off</NavItem>
        </Nav>
      </Navbar>
      );
  }
});

module.exports = Tray; 

