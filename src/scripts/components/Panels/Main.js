'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap/Button');
var Modal = require('react-bootstrap/Modal');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

require('../../../styles/Panels/Main.less');

var Main = React.createClass({
  render: function() {
    return (
      <Modal {...this.props} title={this.props.title} animation={false}>
        <div className="modal-body">
          <TabbedArea defaultActiveKey={1}>
            {this.props.menus.map(function(menu,index){
                return (
                  <TabPane key={menu.key} eventKey={menu.key} tab={menu.value}>{menu.title}</TabPane>
                );
            })}
          </TabbedArea>
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

module.exports = Main; 

