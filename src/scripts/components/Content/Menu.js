'use strict';

var React = require('react/addons');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var NavItem = require('react-bootstrap/NavItem');

var ContentPanel = require('./Panel');

require('../../../styles/Content/Menu.less');

var Menu = React.createClass({
  propTypes: {
     flux: React.PropTypes.object.isRequired, // This needs to be an instance of ...Fluxxor.Flux(...
     contentsDialog: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <ModalTrigger modal={<ContentPanel flux={this.props.flux} title={this.props.label} />}>
         <NavItem>{this.props.label}</NavItem>
      </ModalTrigger>
    );
  }
});

module.exports = Menu; 


