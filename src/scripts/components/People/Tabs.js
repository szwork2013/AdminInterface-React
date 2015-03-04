'use strict';

var React = require('react/addons');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

var Sessions = require('./Sessions');

require('../../../styles/People/Tabs.less');
var Tabs = React.createClass({
  getInitialState: function(){
     return {
        tabActive: 0
     };
  },
  propTypes: {
    flux: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <TabbedArea defaultActiveKey={0} activeKey={this.state.tabActive} onSelect={this.handleSelect}>
      
        <TabPane eventKey={0} tab="Sessions">
          <br />
          <Sessions {...this.props} active={this.state.tabActive == 0} />
        </TabPane> 
        
        <TabPane eventKey={1} tab="Users">
          <br />
        </TabPane>
        
        <TabPane eventKey={2} tab="Groups">
          <br />
        </TabPane>
        
        <TabPane eventKey={3} tab="Login History">
          <br />
        </TabPane>
        
        <TabPane eventKey={4} tab="Profiling">
          <br />
        </TabPane>
        
      </TabbedArea>
    );
  },
  handleSelect: function(selectedKey) {
    this.setState({ tabActive: selectedKey });

  }
});

module.exports = Tabs; 

