'use strict';

var React = require('react/addons');

// We need a ES6 compatible Object.assign polyfill otherwise unsupported browsers will complain
Object.assign = Object.assign || require('object-assign');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;
// Bootstrap components
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

require('../../../styles/Content/AddContent.less');

function linkRenderer(data) {
  return (
    <Button bsStyle="link" href={data.href} target="_blank" >
       {data.link}
    </Button>
  );
}  
function checkBox(data) {
  return (
     <Input type="checkbox" value={0} />
  );
}


var AddContent = React.createClass({
  mixins:['WebMixin'],
  propTypes: {
    tabContents: React.PropTypes.object.isRequired
  },
  render: function () {
    var headers = this.props.tabContents.headers;
    var data = this.props.tabContents.data;
    return (
      <Table rowGetter={function(rowIndex){return data[rowIndex];}}
          rowsCount={data.length} width={980} height={500} headerHeight={40} rowHeight={40}>
          
        {data.map(
          function(cellRow, columnIndex){
            if ( typeof cellRow[columnIndex] === 'object' && cellRow[columnIndex].href ) {
              return (
                <Column cellRenderer={linkRenderer} key={columnIndex} label={headers[columnIndex]} width={300} dataKey={columnIndex} />
              );
              
            }else{
              return (
                <Column key={columnIndex} label={headers[columnIndex]} width={300} dataKey={columnIndex} />
              );
            
            }
          }
        )}
        
        <Column cellRenderer={checkBox} key={99999} label="Select all" width={80} dataKey={1} />
        
      </Table>
    );
  }
});

module.exports = AddContent; 

