'use strict';

var Fluxxor = require("fluxxor");

var Store = Fluxxor.createStore({
  initialize: function() {
    this.sessions = [];
    this.bindActions(
      "GET_SESSIONS", this.getSessions
    );
  },
  getState: function() {
    return {
      sessions: this.sessions
    };
  },
  getSessions: function(payload) {
    console.info("Called again: " + (new Date()))
    $.ajax({
      url: payload.url,
      dataType: 'json',
      success: function(response) {
        this.sessions = response.data;    
        this.emit("change");
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(payload.url, status, err.toString());
        
      }.bind(this)
    });

  }
});

module.exports = Store; 
