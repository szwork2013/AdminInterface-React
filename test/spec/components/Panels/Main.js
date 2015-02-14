'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var Main, component;

  beforeEach(function () {
    Main = require('../../../src/scripts/components/Panels/Main.js');
    component = React.createElement(Main);
  });

  it('should create a new instance of Main', function () {
    expect(component).toBeDefined();
  });
});
