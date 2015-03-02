'use strict';

var React = require('react/addons');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

var AddContent = require('./AddContent');
var FindContent = require('./FindContent');

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

require('../../../styles/Content/Tabs.less');

var Tabs = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("ContentStore")],
  propTypes: {
    flux: React.PropTypes.object.isRequired
  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    // Our entire state is made up of the TodoStore data. In a larger
    // application, you will likely return data from multiple stores, e.g.:
    //
    //   return {
    //     todoData: flux.store("TodoStore").getState(),
    //     userData: flux.store("UserStore").getData(),
    //     fooBarData: flux.store("FooBarStore").someMoreData()
    //   };
    return flux.store("ContentStore").getState();
  },
  render: function () {
    var addContentTab = this.state.data[0];
    var findContentTab = this.state.data[1];
    
    return (
      <TabbedArea defaultActiveKey={0}>
      
        <TabPane key={0} eventKey={0} tab={addContentTab.title}>
          <br />
          <AddContent tabContents={addContentTab} />
        </TabPane> 
        
        <TabPane key={1} eventKey={1} tab={findContentTab.title}>
          <br />
          <FindContent />
        </TabPane>
        
      </TabbedArea>
    );
  }
});

module.exports = Tabs; 

