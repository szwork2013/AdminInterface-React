'use strict';

describe('Reports', function () {
  var React = require('react/addons');
  var Reports, component;

  beforeEach(function () {
    Reports = require('../../../../src/scripts/components/Reports/Menu.js');
    component = React.createElement(Reports);
  });

  it('should create a new instance of Reports', function () {
    expect(component).toBeDefined();
  });
});
