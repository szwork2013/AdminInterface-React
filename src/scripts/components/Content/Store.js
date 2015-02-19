'use strict';

var React = require('react/addons');
var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.menus = [
       { key:1, value:"Add content", title:"Add New Contents" },
       { key:2, value:"Find content", title:"Find Contents" }    
    ];

  },

  getState: function() {
    return {
      menus: this.menus
    };
  }
});

module.exports = Store; 

