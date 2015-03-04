'use strict';

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// Modules
var ToolBar = require('./ToolBar');

// Import CSS files
require('../../styles/main.css');

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
          {this.state.visible && <ToolBar toggleVisibleEvnt={this.toggle} />}
          <a href="#" onClick={this.toggle}>{this.props.toggleLabel}</a>
       </div>
    );
  }
});

module.exports = AdminInterfaceApp;
