'use strict';

var React = require('react/addons');
// Bootstrap components
var Button = require('react-bootstrap').Button;

var WebMixin = {
  linkRenderer: function(data) {
    return (
      <Button bsStyle="link" href={data.href} target="_blank" >
         {data.link}
      </Button>
    );
  }
};

module.exports = WebMixin; 

