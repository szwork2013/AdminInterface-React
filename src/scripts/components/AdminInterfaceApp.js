'use strict';

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// Import CSS files
require('../../styles/main.css');

// Modules
var ToolBar = require('./ToolBar');

var AdminInterfaceApp = React.createClass({
  getInitialState: function() {
     return {visible: false};
  },
  toggle: function(){
      this.setState({
         visible: !this.state.visible
      });
  },
  render: function() {
    return (
       <div>
          <ToolBar visible={this.state.visible} />
          <a href="#" onClick={this.toggle}>..toggle..</a>
       </div>
    );
  }
});

module.exports = AdminInterfaceApp;
