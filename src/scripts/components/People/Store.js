'use strict';

var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.sessions = [];
    this.bindActions(
      "GET_SESSIONS", this.getSessions,
      "KILL_SESSIONS", this.killSessions
    );
  },
  getState: function() {
    return {
      sessions: this.sessions
    };
  },
  getSessions: function() {
    var getActiveSessions = "/mock/opActiveSessions.json";
    $.ajax({
      url: getActiveSessions,
      dataType: 'json',
      success: function(response) {
        this.sessions = response.data;    
        this.emit("change");
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(getActiveSessions, status, err.toString());
        
      }.bind(this)
    });

  },
  killSessions: function(payload){
    var killSessionTarget = "/mock/killActiveSessions.json" + payload.sid;
    $.ajax({
      url: killSessionTarget,
      success: function(response) {
        // refresh the session set     
        this.getSessions();   
        this.emit("change");
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(killSessionTarget, status, err.toString());
        
      }.bind(this)
    });    
    
  }
  
});

module.exports = Store; 
