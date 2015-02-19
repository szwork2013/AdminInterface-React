var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// My modules
var AdminInterfaceApp = require('./AdminInterfaceApp');

// Add routes here
var Routes = (
   <Route handler={AdminInterfaceApp} />
);

// Here is where all the stuff happens
Router.run(Routes, function (Handler) {
  React.render(<Handler toggleLabel="...toggle admin" />, document.getElementById('wgp-toolbar'));
});
