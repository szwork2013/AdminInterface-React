'use strict';

var React = require('react/addons');
var Fluxxor = require("fluxxor");

var Content = Fluxxor.createStore({
  initialize: function() {
    this.menus = [
       { key:1, value:"Add content", title:"Add New Contents(Flux version 2)" },
       { key:2, value:"Find content", title:"Find Contents" }              
    ];

  },

  getState: function() {
    return {
      menus: this.menus
    };
  }
});

module.exports = Content; 

