import React from 'react';
//import d3 from 'd3';
import CellContainer from './CellContainer';
var d3 = require('d3');


class DataSeries extends React.Component {
  render() {
    var props = this.props;
    console.log("DATASERIES PROPS");
    console.log(props);
    /*   
    var data = [
      { "label": '과학기술', "value": 7026758145, "parent": "" },
      { "label": '국방', "value": 41378783971, "parent": '과학기술' }
    ];
    */
    var root = d3.stratify()
        .id(function(d) { return d.label; })
        .parentId(function(d) { return d.parent; })
        (props.data);
    var treemap = d3.treemap()
                    .size([props.width, props.height]);
    treemap(root
        .sum(function(d) { return d.value; })
        .sort(function(a, b) { return b.height - a.height || b.value - a.value; })
    );
    
    var tree = treemap(root);
    console.log(tree);
    console.log(tree.children);
    
    var cells = tree.children.map( (node, idx) => {
      console.log("NODE");
      console.log(node);
      return (
        <CellContainer 
          key={idx}
          x={node.x0}
          y={node.y0}
          width={node.x1}
          height={node.y1}
          fill={props.colors(props.colorAccessor(node, idx))}
          label={node.id}
          fontSize={props.fontSize}
          textColor={props.textColor}
          hoverAnimation={props.hoverAnimation}
          className='cellContainer'
        >
        </CellContainer>
      );
    }, this);
    return (
      <g transform={props.transform} className='treemap'>
        {cells}
      </g>
    );
  }
}

DataSeries.propTypes = {
  data: React.PropTypes.array,
  colors: React.PropTypes.func,
  colorAccessor: React.PropTypes.func,
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

DataSeries.defaultProps = {
  data: [],
  colors: d3.scaleOrdinal(d3.schemeCategory20c),
  colorAccessor: (d, idx) => idx
};

export default DataSeries;
