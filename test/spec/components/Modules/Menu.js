'use strict';

describe('Modules', function () {
  var React = require('react/addons');
  var Modules, component;

  beforeEach(function () {
    Modules = require('../../../../src/scripts/components/Modules/Menu.js');
    component = React.createElement(Modules);
  });

  it('should create a new instance of Modules', function () {
    expect(component).toBeDefined();
  });
});
