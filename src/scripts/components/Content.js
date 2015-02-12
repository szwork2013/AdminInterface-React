'use strict';

var React = require('react/addons');

var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');
var NavItem = require('react-bootstrap/NavItem');

require('../../styles/Content.less');

var Content = React.createClass({
  getMenus: function(){
     return [
        { key:0, value:"Add content" },
        { key:1, value:"Find content" }
     ];
  },
  render: function () {
    var menus = this.getMenus();
    return (
      <DropdownButton eventKey={this.props.index} title={this.props.label}>
          {menus.map(
            function(menu){
              return <MenuItem key={menu.key} eventKey={menu.key}>{menu.value}</MenuItem>;
            }
          )}
      </DropdownButton>     
    );
  },
  handleClick: function(index){
     console.log('You clicked: ' + index);
  }
});

module.exports = Content; 

/*
 *
 *var jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
  );
   onClick={this.handleClick.bind(this, 1)}
*/

