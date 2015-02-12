'use strict';

var React = require('react/addons');

var DropdownButton = require('react-bootstrap/DropdownButton');
var Jumbotron = require('react-bootstrap/Jumbotron');
var MenuItem = require('react-bootstrap/MenuItem');
var NavItem = require('react-bootstrap/NavItem');

require('../../styles/Content.less');

var WGP

var Content = React.createClass({
  mixins: [WGP],
  propTypes: {
     jumbotronId: React.PropTypes.string.isRequired
  },
  getMenus: function(){
     return [
        { key:1, value:"Add content", contentTitle:"Add New Contents" },
        { key:2, value:"Find content", contentTitle:"Find Contents" }
     ];
  },
  render: function () {
    var menus = this.getMenus();
    return (
        <DropdownButton eventKey={this.props.index} title={this.props.label} navItem={true}>     
          {menus.map(function(menu, i) {
            return (
              <MenuItem key={menu.key}
                  eventKey={menu.key}
                  onSelect={this.handleClick.bind(this, menu.contentTitle)}>
                     {menu.value}
              </MenuItem>
            );
          }, this)}
        </DropdownButton>
    );
  },
  handleClick: function(title){
    var jumbotron = (
      <Jumbotron>
        <h3>{title}</h3>
      </Jumbotron>        
    );
    React.render(jumbotron, document.getElementById(this.props.jumbotronId));
  }  
});

module.exports = Content; 


