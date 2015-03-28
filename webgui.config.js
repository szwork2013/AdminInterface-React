/*
 * WebGUI (http://www.webgui.org/)
 *
 * This file runs tasks that replace the server/json sources with WebGUI sorces.
 * 
 */
'use strict';

module.exports = {
   replace: {
      
      src: ['dist/assets/main.js'],    // webpack distribution minified and ugglified
      dest: 'dist/webgui/AdminInterface.js',
      replacements: [
         {
           from: '/mock/opActiveSessions.json',
           to:   '/?op=viewActiveSessions'
         },
         {
           from: '/mock/killActiveSessions.json',
           to:   '/?op=killSession&sid='
         }
      ]
      
   },
   
   copy: {
      
      files: [{
         src: ['dist/webgui/AdminInterface.js'],
         dest: '/Users/daniel/Development/Perl/WebGUI8/www/extras/AdminInterface.js'           
      }]
      
   }
};
