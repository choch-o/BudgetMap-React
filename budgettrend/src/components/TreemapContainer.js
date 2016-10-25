import React from 'react';

class TreemapContainer extends React.Component {
  _renderChart() {
    var props = this.props;
    return (
      <svg
        className={props.svgClassName}
        height={props.height}
        viewBox={props.viewBox}
        width={props.width}
      >
        {props.children}
      </svg>
    );
  }

  render() {
    var props = this.props;

    return(
      <div
        className={props.className}
      >
        {this._renderChart()}
      </div>
    );
  }
}

TreemapContainer.propTypes = {
  children:       React.PropTypes.node,
  className:      React.PropTypes.string,
  height:         React.PropTypes.node,
  svgClassName:   React.PropTypes.string,
  title:          React.PropTypes.node,
  titleClassName: React.PropTypes.string,
  width:          React.PropTypes.node
}

TreemapContainer.defaultProps = {
    className:      'rd3-basic-chart',
    svgClassName:   'rd3-chart',
    titleClassName: 'rd3-chart-title'
}

export default TreemapContainer;
