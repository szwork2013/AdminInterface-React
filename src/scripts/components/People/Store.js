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

  },
  killSessions:function(payload){
    console.log(payload.sid);
    this.emit("change");
    
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
    
  }
  
});

module.exports = Store; 
