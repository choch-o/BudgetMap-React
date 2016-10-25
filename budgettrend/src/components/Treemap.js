import React from 'react';
// import d3 from 'd3';
import DataSeries from './DataSeries';
import TreemapContainer from './TreemapContainer';
var d3 = require('d3');

class Treemap extends React.Component {
  render() {
    var props = this.props;
    console.log("TREEMAP PROPS");
    console.log(props);
    return (
      <TreemapContainer
        width={props.width}
        height={props.height}
      >
        <g className='rd3-treemap'>
          <DataSeries
            data={props.data}
            width={props.width}
            height={props.height}
            colors={props.colors}
            colorAccessor={props.colorAccessor}
            textColor={props.textColor}
            fontSize={props.fontSize}
            hoverAnimation={props.hoverAnimation}
          />
        </g> 
      </TreemapContainer>
    );

/*    return (
      <svg viewBox="0 0 95 50"
           xmlns="http://www.w3.org/2000/svg">
        <g className='rd3-treemap' stroke="green" fill="white" stroke-width="5">
          <circle cx="25" cy="25" r="15"/>
          <circle cx="40" cy="25" r="15"/>
          <circle cx="55" cy="25" r="15"/>
          <circle cx="70" cy="25" r="15"/>
        </g>
      </svg>
    );
*/  
  }
}

Treemap.propTypes = {
  data: React.PropTypes.array,
  margins: React.PropTypes.object,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  title: React.PropTypes.string,
  textColor: React.PropTypes.string,
  fontSize:  React.PropTypes.oneOfType([
               React.PropTypes.string,
               React.PropTypes.number
             ]),
  colors: React.PropTypes.func,
  colorAccessor: React.PropTypes.func,
  hoverAnimation: React.PropTypes.bool
}

Treemap.defaultPropTypes = {
  hoverAnimation: true,
  data:           [],
  width:          400,
  heigth:         200,
  title:          '',
  textColor:      '#f7f7f7',
  fontSize:       '0.85em',
  colors:         d3.scaleOrdinal(d3.schemeCategory20c),
  colorAccessor:  (d, idx) => idx,
}

export default Treemap;
