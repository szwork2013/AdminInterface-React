'use strict';

var Fluxxor = require("fluxxor");
var _sessionSource = '/mock/opActiveSessions.json';

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
    //console.info("Called again: " + (new Date()))
    $.ajax({
      url: _sessionSource,
      dataType: 'json',
      success: function(response) {
        this.sessions = response.data;    
        this.emit("change");
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(_sessionSource, status, err.toString());
        
      }.bind(this)
    });

  },
  killSessions:function(payload){
    console.log(payload.sid);

    
    //if ( sid.length > 10 ){
    //  $( "#dialog-delete-confirm" ).dialog({
    //     modal: true,
    //     buttons: {
    //        "Delete all items":function(){
    //           var jsonPath = Prime.config().jsonSourceServer + '?op=killSession&sid=' + sid;
    //           AjaxHelper({ jsonPath: jsonPath, logMessage:'Deleted', callback:function(){ sessionsDatatable.fnDraw(); } });
    //           $( this ).dialog( "close" );
    //        },
    //        Cancel: function() {
    //           $( this ).dialog( "close" );
    //        }
    //     }
    //  });
    //}
    this.emit("change");
    
  }
  
});

module.exports = Store; 
