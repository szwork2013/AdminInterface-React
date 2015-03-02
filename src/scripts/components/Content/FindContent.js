'use strict';

var React = require('react/addons');
var Input = require('react-bootstrap/Input');
var Button = require('react-bootstrap/Button');

require('../../../styles/Content/FindContent.less');

var FindContent = React.createClass({
  render: function () {
    return (
      <div id="wgp-find-content">
        <Input type="text" buttonAfter={<Button>Search</Button>} />
      </div>
    );
  }
});

module.exports = FindContent; 

