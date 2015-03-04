'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap/Button');
var Modal = require('react-bootstrap/Modal');

var Tabs = require('./Tabs');

require('../../../styles/People/Panel.less');

var Panel = React.createClass({
  propTypes: {
     flux: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <Modal id="wgp-content-panel" title={this.props.label} {...this.props}> 
        <div className="modal-body">
          <Tabs flux={this.props.flux} />
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

module.exports = Panel; 

