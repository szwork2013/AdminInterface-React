'use strict';

describe('TopTableMenu', function () {
  var React = require('react/addons');
  var TopTableMenu, component;

  beforeEach(function () {
    TopTableMenu = require('components/menu/TopTableMenu.js');
    component = React.createElement(TopTableMenu);
  });

  it('should create a new instance of TopTableMenu', function () {
    expect(component).toBeDefined();
  });
});
