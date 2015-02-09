'use strict';

describe('ToolBar', function () {
  var React = require('react/addons');
  var ToolBar, component;

  beforeEach(function () {
    ToolBar = require('../../../src/scripts/components/ToolBar.js');
    component = React.createElement(ToolBar);
  });

  it('should create a new instance of ToolBar', function () {
    expect(component).toBeDefined();
  });
});
