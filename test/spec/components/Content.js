'use strict';

describe('Content', function () {
  var React = require('react/addons');
  var Content, component;

  beforeEach(function () {
    Content = require('../../../src/scripts/components/Content.js');
    component = React.createElement(Content);
  });

  it('should create a new instance of Content', function () {
    expect(component).toBeDefined();
  });
});
