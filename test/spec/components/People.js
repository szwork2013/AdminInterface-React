'use strict';

describe('People', function () {
  var React = require('react/addons');
  var People, component;

  beforeEach(function () {
    People = require('../../../src/scripts/components/People.js');
    component = React.createElement(People);
  });

  it('should create a new instance of People', function () {
    expect(component).toBeDefined();
  });
});
