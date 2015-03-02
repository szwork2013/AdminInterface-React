'use strict';

var React = require('react/addons');
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
    var tabs = this.state.data.map(
      function(tab,index){     
        return (
          <TabPane key={tab.key} eventKey={tab.key} tab={tab.title}>
            <br />
            <Table rowGetter={function(rowIndex){return tab.data[rowIndex];}}
                rowsCount={tab.data.length} width={500} height={500} headerHeight={40} rowHeight={40}>
                
              {tab.data.map(
                 function(cellRow, columnIndex){
                    return (
                      <Column key={columnIndex} label={tab.columns[columnIndex]} width={300} dataKey={columnIndex} />
                    );
                 }
              )}
                
            </Table>  
          </TabPane>
        );
      }
    );

    return (
      <TabbedArea defaultActiveKey={1}>
         {tabs}
      </TabbedArea>
    );
  }
});

module.exports = Tabs; 

