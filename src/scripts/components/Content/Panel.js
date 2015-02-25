'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap/Button');
var Modal = require('react-bootstrap/Modal');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

//var FixedDataTable = require('fixed-data-table');
//var Table = FixedDataTable.Table;
//var Column = FixedDataTable.Column;

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

require('../../../styles/Content/Panel.less');

var rows = [
      ['a1', 'b1', 'c1'],
      ['a2', 'b3', 'c2'],
      ['a3', 'b3', 'c3']
    ];  
var rowGetter = function(rowIndex) {
       return rows[rowIndex];
    };


var Panel = React.createClass({
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
  render: function() {
    var tabs = this.state.menus.map(
      function(menu,index){
        return (
          <TabPane key={menu.key} eventKey={menu.key} tab={menu.value}>
            {menu.title}
          </TabPane>
        );
      }
    );
    
    return (
      <Modal id="wgp-content-panel" title={this.props.label} {...this.props}> 
        <div className="modal-body">
          <TabbedArea defaultActiveKey={1}>
            {tabs}
          </TabbedArea>
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

module.exports = Panel; 

