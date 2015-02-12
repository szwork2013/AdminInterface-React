'use strict';

describe('AddContent', function () {
  var React = require('react/addons');
  var AddContent, component;

  beforeEach(function () {
    AddContent = require('../../../src/scripts/components/Content/AddContent.js');
    component = React.createElement(AddContent);
  });

  it('should create a new instance of AddContent', function () {
    expect(component).toBeDefined();
  });
});
