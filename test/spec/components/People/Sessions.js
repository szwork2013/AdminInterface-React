'use strict';

describe('Sessions', function () {
  var React = require('react/addons');
  var Sessions, component;

  beforeEach(function () {
    Sessions = require('components/People/Sessions.js');
    component = React.createElement(Sessions);
  });

  it('should create a new instance of Sessions', function () {
    expect(component).toBeDefined();
  });
});
