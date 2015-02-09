'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var AdminInterfaceApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    AdminInterfaceApp = require('../../../src/scripts/components/AdminInterfaceApp.js');
    component = React.createElement(AdminInterfaceApp);
  });

  it('should create a new instance of AdminInterfaceApp', function () {
    expect(component).toBeDefined();
  });
});
