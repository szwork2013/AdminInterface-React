'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap/Button');
var Modal = require('react-bootstrap/Modal');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

// We need a ES6 compatible Object.assign polyfill otherwise unsupported browsers will complain
Object.assign = Object.assign || require('object-assign');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

require('../../../styles/Content/Panel.less');

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
          <TabPane key={menu.key} eventKey={menu.key} tab={menu.title}>            
            <Table rowGetter={function(rowIndex){return menu.data[rowIndex];}}
                rowsCount={menu.data.length} width={500} height={500} headerHeight={40} rowHeight={40}>
              <Column label="Col 1" width={100} dataKey={0} />
              <Column label="Col 2" width={100} dataKey={1} />
            </Table>  
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

