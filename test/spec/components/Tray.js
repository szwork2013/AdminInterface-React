'use strict';

describe('Tray', function () {
  var React = require('react/addons');
  var Tray, component;

  beforeEach(function () {
    Tray = require('../../../src/scripts/components/Tray.js');
    component = React.createElement(Tray);
  });

  it('should create a new instance of Tray', function () {
    expect(component).toBeDefined();
  });
});
