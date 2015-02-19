'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var Jumbotron = require('react-bootstrap/Jumbotron');
require('../../styles/ToolBar.less');

// sub modules
var Content = require('./Content/Menu');
var Appearance = require('./Appearance/Menu');
var People = require('./People/Menu');
var Modules = require('./Modules/Menu');
var Settings = require('./Settings/Menu');
var Reports = require('./Reports/Menu');
var Help = require('./Help/Menu');
var Tray = require('./Tray');

var ToolBar = React.createClass({
  propTypes: {
     flux: React.PropTypes.object.isRequired, // This needs to be an instance of ...Fluxxor.Flux(...
     contentsDialog: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      contentsDialog: 'wgp-contents-dialog'
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
  render: function () {
    var cssClasses = cx({
      'navbar-static-top' : true,
      'navbar-inverse' : true
    });      
    var menus = this.getMenus();
    return (
      <div className="-wgp-fixed-top">
        <Navbar id="ToolBar" className={cssClasses}>
          <Nav style={{ float: "left" }}>
             <Content index={0} link={menus[0].link} label={menus[0].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} /> 
             <Appearance index={1} link={menus[1].link} label={menus[1].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
             <People index={2} link={menus[2].link} label={menus[2].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
             <Modules index={3} link={menus[3].link} label={menus[3].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
             <Settings index={4} link={menus[4].link} label={menus[4].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
             <Reports index={5} link={menus[5].link} label={menus[5].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
             <Help index={6} link={menus[6].link} label={menus[6].label} contentsDialog={this.props.contentsDialog} flux={this.props.flux} />
          </Nav>
        </Navbar>
        <Tray />
        <div id={this.props.contentsDialog}></div>   
      </div>
    );
  }
});

module.exports = ToolBar; 
