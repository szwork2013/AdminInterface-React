'use strict';

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// Import CSS files
require('../../styles/main.css');

// Modules
var ToolBar = require('./ToolBar');

// Flux implementation, see:  https://facebook.github.io/flux/  and http://fluxxor.com
var ContentStore = require('./Content/Store');
var Fluxxor = require("fluxxor");
var flux = new Fluxxor.Flux({ ContentStore: new ContentStore() }, {});
//flux.on("dispatch", function(type, payload) {
//  if (console && console.log) {
//    console.log("[Dispatch]", type, payload);
//  }
//});

var AdminInterfaceApp = React.createClass({
  propTypes: {
     toggleLabel: React.PropTypes.string.isRequired
  },  
  getInitialState: function() {
     return {visible: false};
  },  
  toggle: function(){
      this.setState({
         visible: !this.state.visible
      });
  },
  render: function() {
    // disable the navbar if we no longer wish to display it!
    return (
       <div>
          {this.state.visible && <ToolBar flux={flux} />}
          <a href="#" onClick={this.toggle}>{this.props.toggleLabel}</a>
       </div>
    );
  }
});

module.exports = AdminInterfaceApp;
