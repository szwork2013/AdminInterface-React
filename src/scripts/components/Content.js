'use strict';

var React = require('react/addons');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var NavItem = require('react-bootstrap/NavItem');

var PanelsMain = require('./Panels/Main');

require('../../styles/Content.less');

var Content = React.createClass({
  propTypes: {
     flux: React.PropTypes.object.isRequired, // This needs to be an instance of ...Fluxxor.Flux(...
     jumbotronId: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <ModalTrigger modal={<PanelsMain flux={this.props.flux} title="Contents" />}>
         <NavItem>{this.props.label}</NavItem>
      </ModalTrigger>
    );
  }
});

module.exports = Content; 


