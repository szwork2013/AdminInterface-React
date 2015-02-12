'use strict';

var React = require('react/addons');
var $ = jquery = jQuery = require('jquery');
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

require('../../styles/ToolBar.less');

// sub modules
var Content = require('./Content');

var ToolBar = React.createClass({
  getMenus: function(){
    return [
        { link:"#",label:"Content" },
        { link:"#",label:"Appearance" },
        { link:"#",label:"People" },
        { link:"#",label:"Modules" },
        { link:"#",label:"Settings" },         
        { link:"#",label:"Reports" },
        { link:"#",label:"Help" }
    ];
  },
  getInitialState: function() {
     return {
        visible: false
     };
  },  
  render: function () {
    var menus = this.getMenus();
    var navbar = null;
    if ( this.props.visible ) { // disable the navbar if we no longer wish to display it!
      navbar = (
        <Navbar id="ToolBar">
          <Nav>
             <Content index={0} link={menus[0].link} label={menus[0].label} />
          </Nav>
        </Navbar>
      );
    }
    // Finally return the elements we want in the navbar or just null if we do not want any
    return navbar;
  }
});

module.exports = ToolBar; 
