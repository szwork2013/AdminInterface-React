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
var Modal = require('react-bootstrap').Modal;
var OverlayMixin = require('react-bootstrap').OverlayMixin;

// Flux implementation, see:  https://facebook.github.io/flux/ and http://fluxxor.com
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
    
require('../../../styles/People/Sessions.less');
var Sessions = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("SessionStore"), OverlayMixin],
  getInitialState: function() {
    return {
      selected: [],
      killAlertActive: false,
      enableCheck: false
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
    var disableKill = {disabled: this.state.selected.length <= 0};
    return (
      <div id="Sessions">   
        <div className="wgp-people-session-controls" wrapperClassName="wrapper">
          <Button id="wgp-people-sessions-button-killSessions" {...disableKill} bsStyle="danger" bsSize="xsmall" onClick={this._killSelectedSessions}>Kill Selected</Button>
          <input type="checkbox" onClick={this._toggleAll} id="wgp-people-sessions-checkbox-all" />
          <label>Select All</label>
        </div>
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
    var selectedSessions = this.state.selected;
    var value = this.state.sessions[index].sessionId; // current clicked row
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
  _killSelectedSessions:function(){
    var sid = "";
    this.state.selected.forEach(function(sessionId){
      sid += sessionId + ',';
    });
    
    if ( sid.length > 10 ){ // most webgui session ids are greater than 10 characters
      this.setState({
        killAlertActive: true 
      });
      //this.props.flux.actions.killSessions( sid );
    }
    
  },
  _closeKillSessionAlertPanel: function(){
    this.setState({
      killAlertActive: false
    });
  },
  // This is called by the `OverlayMixin` when this component
  // is mounted or updated and the return value is appended to the body.
  renderOverlay: function () {
    if (!this.state.killAlertActive) {
      return <span/>;
    }
  
    return (
        <Modal bsStyle="primary" title="Modal heading" onRequestHide={this._closeKillSessionAlertPanel}>
          <div className="modal-body">
            This modal is controlled by our custom trigger component.
          </div>
          <div className="modal-footer">
            <Button onClick={this._closeKillSessionAlertPanel}>Close</Button>
          </div>
        </Modal>
      );
  }  
});

module.exports = Sessions; 

