'use strict';

var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  actions: {
    "GET_SESSIONS": "getSessions"
  },
  getDefaultProps: function () {
    return {
      url: '/mock/opActiveSessions.json'
    };
  },  
  initialize: function() {
    this.menus = [
       { key:0, value:"Sessions", title:"Sessions" },
       { key:1, value:"Users", title:"Users" },
       { key:2, value:"Groups", title:"Groups" },
       { key:3, value:"Login History", title:"Login History" },
       { key:4, value:"User Profiling", title:"User Profiling" }     
    ];
    this.sessions = [];
  },
  getState: function() {
    return {
      date: "",
      menus: this.menus,
      sessions: this.sessions
    };
  },
  getSessions: function() {
    $.ajax({
      url: '/mock/opActiveSessions.json',
      dataType: 'json',
      success: function(response) {
        console.log(response.data);
        //this.sessions = response.data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/mock/opActiveSessions.json', status, err.toString());
      }.bind(this)
    });
    
    this.emit("change");
  }
});

module.exports = Store; 
