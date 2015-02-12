var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// My modules
var AdminInterfaceApp = require('./AdminInterfaceApp');
var ToolBar = require('./ToolBar');

// Add routes here
var Routes = (
   <Route handler={AdminInterfaceApp}>
      <Route name="activate" handler={ToolBar} />
   </Route>
);

// Here is where all the stuff happens
Router.run(Routes, function (Handler) {
  React.render(<Handler />, document.getElementById('_wgp_toolbar'));
});
