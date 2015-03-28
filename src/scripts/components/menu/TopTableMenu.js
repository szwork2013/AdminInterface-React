'use strict';

var React = require('react/addons');

// Bootstrap components
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var OverlayMixin = require('react-bootstrap').OverlayMixin;

require('../../../styles/menu/TopTableMenu.less');

var TopTableMenu = React.createClass({
  mixins: [OverlayMixin],
  getInitialState: function() {
    return {
      killAlertActive: false
    }
  },
  getDefaultProps: function() {
    return {
      checkAllLabel: 'Select All'
    };
  },
  propTypes: {
    actionButtonTitle: React.PropTypes.string.isRequired,
    checkAllLabel: React.PropTypes.string,
    actionPanelText: React.PropTypes.string.isRequired,
    actionPanelTitle: React.PropTypes.string.isRequired,    
    selected: React.PropTypes.array.isRequired,
    triggerConfirmAction: React.PropTypes.func.isRequired
  },  
  render: function () {
    var disableKill = this.props.selected.length <= 0;
    return (
      <div id="TopTableMenu" wrapperClassName="wrapper">
        <Button className="wgp-menu-actionButton" disabled={disableKill} bsStyle="danger" bsSize="xsmall" onClick={this._deleteDialogShow}>{this.props.actionButtonTitle}</Button>
        <input  className="wgp-menu-actionCheckbox" type="checkbox" onClick={this.props.toggleAll} />
        <label>{this.props.checkAllLabel}</label>
      </div>
    );
  },
  _deleteDialogShow: function(){
    var active = this.props.selected.length > 0;
    this.setState({ killAlertActive: active });
  },
  _deleteDialogHide: function(){
    this.setState({ killAlertActive: false });       
  },
  _triggerParentConfirmAction: function(){
    // trigger the parent action and close the dialog
    this.props.triggerConfirmAction();
    this._deleteDialogHide();
  },
  // This is called by the `OverlayMixin` when this component
  // is mounted or updated and the return value is appended to the body.
  renderOverlay: function () {
    if (!this.state.killAlertActive) {
      return <span/>;
    }
  
    return (
      <Modal title={this.props.actionPanelTitle} bsStyle="danger" onRequestHide={this._deleteDialogHide}>
        <div className="modal-body">
          {this.props.actionPanelText}
        </div>
        <div className="modal-footer">
          <Button onClick={this._triggerParentConfirmAction} bsStyle="danger">Yes</Button>
          <Button onClick={this._deleteDialogHide}>Cancel</Button>   
        </div>
      </Modal>
    );
  }
});

module.exports = TopTableMenu; 

