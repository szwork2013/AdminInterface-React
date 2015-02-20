'use strict';

describe('Appearance', function () {
  var React = require('react/addons');
  var Appearance, component;

  beforeEach(function () {
    Appearance = require('../../../../src/scripts/components/Appearance/Menu.js');
    component = React.createElement(Appearance);
  });

  it('should create a new instance of Appearance', function () {
    expect(component).toBeDefined();
  });
});
