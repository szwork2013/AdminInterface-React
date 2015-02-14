'use strict';

var React = require('react/addons');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var NavItem = require('react-bootstrap/NavItem');

var PanelsMain = require('./Panels/Main');

require('../../styles/Content.less');

var Content = React.createClass({
  propTypes: {
     jumbotronId: React.PropTypes.string.isRequired
  },
  getMenus: function(){
     return [
        { key:1, value:"Add content", title:"Add New Contents" },
        { key:2, value:"Find content", title:"Find Contents" }
     ];
  },
  render: function () {
    var menus = this.getMenus();
    return (
      <ModalTrigger modal={<PanelsMain menus={menus} title="Contents" />}>
         <NavItem>{this.props.label}</NavItem>
      </ModalTrigger>
    );
  }
});

module.exports = Content; 


