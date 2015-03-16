'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');

// Fixed data tables (Facebook) requirement:  http://facebook.github.io/fixed-data-table/
require('../../styles/fixed-data-table.css');

// sub modules
var Content = require('./Content/Menu');
var Appearance = require('./Appearance/Menu');
var People = require('./People/Menu');
var Modules = require('./Modules/Menu');
var Settings = require('./Settings/Menu');
var Reports = require('./Reports/Menu');
var Help = require('./Help/Menu');
var Tray = require('./Tray');

// Flux implementation, see:  https://facebook.github.io/flux/  and http://fluxxor.com
var ContentStore = require('./Content/Store');
var SessionStore = require('./People/Store');
var Fluxxor = require("fluxxor");

// Setup your actions here.
var actions = {
  getSessions: function() {
    this.dispatch("GET_SESSIONS", {});
  },
  killSessions: function(sid){
    this.dispatch("KILL_SESSIONS", { sid: sid });
  }
  
};

var flux = new Fluxxor.Flux({
  ContentStore: new ContentStore(),
  SessionStore: new SessionStore(),  
}, actions );
//flux.on("dispatch", function(type, payload) {
//  if (console && console.log) {
//    console.log("[Dispatch]", type, payload);
//  }
//});

require('../../styles/ToolBar.less');
var ToolBar = React.createClass({
  propTypes: {
     contentsDialog: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      contentsDialog: 'wgp-contents-dialog'
    };
  },
  render: function () {
    var cssClasses = cx({
      'navbar-static-top' : true,
      'navbar-inverse' : true
    });      
    return (
      <div className="-wgp-fixed-top">
        <Navbar id="ToolBar" className={cssClasses}>
          <Nav style={{ float: "left" }}>
             <Content     index={0} label="Content" {...this.props} flux={flux} /> 
             <Appearance  index={1} label="Appearance" {...this.props} flux={flux} />
             <People      index={2} label="People" {...this.props} flux={flux} />
             <Modules     index={3} label="Modules" {...this.props} flux={flux} />
             <Settings    index={4} label="Settings" {...this.props} flux={flux} />
             <Reports     index={5} label="Reports" {...this.props} flux={flux} />
             <Help        index={6} label="Help" {...this.props} flux={flux} />
          </Nav>
        </Navbar>
        <Tray {...this.props} />
        <div id={this.props.contentsDialog}></div>   
      </div>
    );
  }
});

module.exports = ToolBar; 
