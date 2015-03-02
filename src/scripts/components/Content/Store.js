'use strict';

var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.data = [
      { title:"Add content",
        headers:[ "First", "Second", "Third" ],      
        data:[
          ['<a href="http://www.yahoo.com">Yahoo</a>',"two","three"],
          ["one2","two2","three2"],
          ["one3","two3","three3"]           
        ]
      },
      { title:"Find content",
        headers:[ "Uno", "Dos", "Tres" ],
        data:[
          ["oneI","twoI","threeI"],
          ["oneI2","twoI2","threeI2"],
          ["oneI3","twoI3","threeI3"]           
        ]
      }          
    ];

  },
  getState: function() {
    return {
      data: this.data
    };
  }
});

module.exports = Store; 

