'use strict';

describe('Help', function () {
  var React = require('react/addons');
  var Help, component;

  beforeEach(function () {
    Help = require('../../../src/scripts/components/Help.js');
    component = React.createElement(Help);
  });

  it('should create a new instance of Help', function () {
    expect(component).toBeDefined();
  });
});
