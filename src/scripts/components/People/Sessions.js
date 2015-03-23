'use strict';

var React = require('react/addons');

// We need a ES6 compatible Object.assign polyfill otherwise unsupported browsers will complain
Object.assign = Object.assign || require('object-assign');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;

// Bootstrap components
var Input = require('react-bootstrap').Input;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

// Our components
var TopTableMenu = require('../menu/TopTableMenu');

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
    
require('../../../styles/People/Sessions.less');
var Sessions = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore")],
  getInitialState: function() {
    return {
      selected: []
    }
  },
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
     this._getSessionData();
  },
  render: function () {    
    var data = this.state.sessions;
    return (
      <div id="Sessions">   
        <TopTableMenu selected={this.state.selected} toggleAll={this._toggleAll} triggerConfirmAction={this._killSelectedSessions}
          actionButtonTitle="Kill Selected"
          actionPanelText="Are you sure you want to kill the selected sessions?"
          actionPanelTitle="Confirm"
        />
        <Table rowsCount={data.length} rowGetter={this._getRowData} onRowClick={this._onRowSelect} width={1090} height={500} headerHeight={40} rowHeight={40} overflowX="hidden">
          <Column label="Username"    width={250} dataKey="username" />
          <Column label="User Id"     width={250} dataKey="userId" />
          <Column label="IP Address"  width={200} dataKey="lastIP" />
          <Column label="Last Viewed" width={165} dataKey="lastPageView" />
          <Column label="Expires"     width={165} dataKey="expires" />
          <Column label="Kill"        width={60}  dataKey="sessionId" align="center"
             cellRenderer={(value) => <input type="checkbox" value={value} checked={this.state.selected.indexOf(value) >= 0} onChange={() => {}} />} />
        </Table>
      </div>
    );
  },
  _toggleAll: function(e) {
    var newSet = [];
    if (e.target.checked) {
      this.state.sessions.forEach(function(row){
        newSet.push( row.sessionId );
      });
    }
    this.setState({
      selected: newSet
    });
  },
  _onRowSelect: function(e, index){
    var value = this.state.sessions[index].sessionId; // current clicked row
    var selectedSessions = this.state.selected;
    var index = selectedSessions.indexOf(value);
    if ( index < 0 ) { // does not exist in the list.  is not CHECKED!
      selectedSessions.push( value );
    }else{
      selectedSessions.splice(index, 1);
    }
    this.setState({
      selected: selectedSessions
    });
  },
  _getRowData: function(rowIndex){
    return this.state.sessions[rowIndex];
  },
  _getSessionData: function(){
    this.props.flux.actions.getSessions();    
  },
  _killSelectedSessions: function(){
    var sid = "";
    this.state.selected.forEach(function(sessionId){
      sid += sessionId + ',';
    });
    this.props.flux.actions.killSessions( sid ); // kill the selected sessions
    // do error stuff and hide dialog
    this.setState({ selected: [] });
  }
});

module.exports = Sessions; 

