'use strict';

var React = require('react/addons');
var $ = jquery = jQuery = require('jquery');
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var Jumbotron = require('react-bootstrap/Jumbotron');
require('../../styles/ToolBar.less');

// sub modules
var Content = require('./Content');
var Appearance = require('./Appearance');
var People = require('./People');
var Modules = require('./Modules');
var Settings = require('./Settings');
var Reports = require('./Reports');
var Help = require('./Help');

var ToolBar = React.createClass({
  propTypes: {
     jumbotronId: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      jumbotronId: '_wgp_jumbotron'
    };
  },
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
        <div>
          <Navbar id="ToolBar">
            <Nav>
               <Content index={0} link={menus[0].link} label={menus[0].label} jumbotronId={this.props.jumbotronId} /> 
               <Appearance index={1} link={menus[1].link} label={menus[1].label} jumbotronId={this.props.jumbotronId} />
               <People index={2} link={menus[2].link} label={menus[2].label} jumbotronId={this.props.jumbotronId} />
               <Modules index={3} link={menus[3].link} label={menus[3].label} jumbotronId={this.props.jumbotronId} />
               <Settings index={4} link={menus[4].link} label={menus[4].label} jumbotronId={this.props.jumbotronId} />
               <Reports index={5} link={menus[5].link} label={menus[5].label} jumbotronId={this.props.jumbotronId} />
               <Help index={6} link={menus[6].link} label={menus[6].label} jumbotronId={this.props.jumbotronId} />
            </Nav>
          </Navbar>
          <div id={this.props.jumbotronId}></div>   
        </div>
      );
    }
    // Finally return the elements we want in the navbar or just null if we do not want any
    return navbar;
  }
});

module.exports = ToolBar; 
