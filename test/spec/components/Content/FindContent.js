'use strict';

describe('FindContent', function () {
  var React = require('react/addons');
  var FindContent, component;

  beforeEach(function () {
    FindContent = require('components/Content/FindContent.js');
    component = React.createElement(FindContent);
  });

  it('should create a new instance of FindContent', function () {
    expect(component).toBeDefined();
  });
});
