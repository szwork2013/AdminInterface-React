'use strict';

var React = require('react/addons');

// We need a ES6 compatible Object.assign polyfill otherwise unsupported browsers will complain
Object.assign = Object.assign || require('object-assign');
var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;

require('../../../styles/Content/AddContent.less');

var AddContent = React.createClass({
  propTypes: {
    tabContents: React.PropTypes.object.isRequired
  },
  render: function () {
    var headers = this.props.tabContents.headers;
    var data = this.props.tabContents.data;
    return (
      <Table rowGetter={function(rowIndex){return data[rowIndex];}}
          rowsCount={data.length} width={500} height={500} headerHeight={40} rowHeight={40}>
          
        {data.map(
          function(cellRow, columnIndex){
            return (
              <Column key={columnIndex} label={headers[columnIndex]} width={300} dataKey={columnIndex} />
            );
          }
        )}
          
      </Table>  
    );
  }
});

module.exports = AddContent; 

