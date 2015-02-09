'use strict';

var React = require('react/addons');

require('../../styles/ToolBar.less');
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

var ToolBar = React.createClass({
  getInitialState: function() {
     return {
        visible: false
     };
  },  
  render: function () {
    var data = [
          { link:"#",label:"Link1" },
          { link:"#",label:"Link2" }
        ];
    
    var navbar = null;    
    if ( this.props.visible ) { // disable the navbar if we no longer wish to display it!
      var navItems = [];
      var count = 0;
      data.forEach(function(item) {
         navItems.push( <NavItem key={count} href={item.link}>{item.label}</NavItem> );
         count++;
      });
            
      //final rendered component
      navbar = (
        <Navbar id="ToolBar">
          <Nav>
             {navItems}
          </Nav>
        </Navbar>
      );
    }
    // Finally return the elements we want in the navbar or just null if we do not want any
    return navbar;
  }
});

module.exports = ToolBar; 

