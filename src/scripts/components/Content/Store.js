'use strict';

var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.menus = [
      { key:1, title:"Add content",
      data:[
        ["one","two","three"],
        ["one2","two2","three2"],
        ["one3","two3","three3"]           
      ]},
      { key:2, title:"Find content",
      data:[
        ["oneI","twoI","threeI"],
        ["oneI2","twoI2","threeI2"],
        ["oneI3","twoI3","threeI3"]           
      ]}          
    ];

  },
  getState: function() {
    return {
      menus: this.menus
    };
  }
});

module.exports = Store; 

