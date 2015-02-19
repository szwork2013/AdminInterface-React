'use strict';

var React = require('react/addons');
var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.menus = [
       { key:1, value:"Add content", title:"Add New Contents" },
       { key:2, value:"Find content", title:"Find Contents" },
       { key:3, value:"Find content", title:"Find Contents" },
       { key:4, value:"Find content", title:"Find Contents" },
       { key:5, value:"Find content", title:"Find Contents" },
       { key:6, value:"Find content", title:"Find Contents" },
       { key:7, value:"Find content", title:"Find Contents" }       
    ];

  },

  getState: function() {
    return {
      menus: this.menus
    };
  }
});

module.exports = Store; 
