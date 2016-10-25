import React from 'react';
var shade = require('../utils').shade;
import Cell from './Cell';

class CellContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fill: this.props.fill};
  }

  render() {
    var props = this.props;
    console.log("CELLCONTAINER PROPS");
    console.log(props);

    return (
      <Cell
        {...props}
        fill={this.state.fill}
        handleMouseOver={props.hoverAnimation ? this._animateCell : null}
        handleMouseLeave={props.hoverAnimation ? this._restoreCell : null}
      />
    );
  }

  _animateCell() {
    this.setState({
      fill: shade(this.props.fill, 0.05)
    });
  }

  _restoreCell() {
    this.setState({
      fill: this.props.fill
    });
  }
}

CellContainer.propTypes = {
  fill: React.PropTypes.string
}

export default CellContainer;
