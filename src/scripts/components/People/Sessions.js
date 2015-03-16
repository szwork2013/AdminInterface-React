'use strict';

var React = require('react/addons');



// We need a ES6 compatible Object.assign polyfill otherwise unsupported browsers will complain
Object.assign = Object.assign || require('object-assign');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;

// Bootstrap components
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
    
function checkBox(data){
  return (
    <input type="checkbox" value={data} className="wgp-people-sessions-checkbox" />
  );
}
    
require('../../../styles/People/Sessions.less');
var Sessions = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
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
    return flux.store("SessionStore").getState();
  },
  componentWillMount: function(){
     this.getSessionData();
  },
  render: function () {    
    var data = this.state.sessions;
    
    return (
      <div id="Sessions">   
        <div className="wgp-people-session-controls" wrapperClassName="wrapper">
          <Button id="wgp-people-sessions-button-killSessions" bsStyle="danger" bsSize="xsmall" onClick={this.killSelectedSessions}>Kill Selected</Button>
          <input type="checkbox" onClick={this.checkall} id="wgp-people-sessions-checkbox-all" />
          <label>Select All</label>
        </div>
        <Table rowsCount={data.length} width={1090} height={500} headerHeight={40} rowHeight={40} overflowX="hidden"
          rowGetter={function(rowIndex){return data[rowIndex];}}>
          <Column label="Username"    width={250} dataKey="username" />
          <Column label="User Id"     width={250} dataKey="userId" />
          <Column label="IP Address"  width={200} dataKey="lastIP" />
          <Column label="Last Viewed" width={165} dataKey="lastPageView" />
          <Column label="Expires"     width={165} dataKey="expires" />
          <Column label="Kill"        width={60}  dataKey="sessionId" cellRenderer={checkBox} align="center" />
        </Table>
      </div>
    );
  },
  checkall:function(){
    var checked = $("#wgp-people-sessions-checkbox-all").is(':checked');    
    $(".wgp-people-sessions-checkbox").each(function(){
      $(this).prop('checked', checked);
    });
  },
  getSessionData: function(){
    this.props.flux.actions.getSessions();    
  },
  killSelectedSessions:function(){
    var sid = "";
    $(".wgp-people-sessions-checkbox").each(function(){
      if ( $(this).is(':checked') ){
         sid += $(this).attr('value') + ',';
      }
    });
    
    if ( sid.length > 10 ){ // most webgui session ids are greater than 10 characters
      this.props.flux.actions.killSessions( sid );
    }
    
  }
});

module.exports = Sessions; 

