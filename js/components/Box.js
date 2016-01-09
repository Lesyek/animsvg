import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor, component) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      component.setState({ droped: true });
    }
  }
};

class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state= { droped: false };
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props
    const opacity = isDragging ? 0.4 : 1;

    let classes = this.state.droped ? 'box reset-svg-color ' + name : 'box ' + name;
    return (
      connectDragSource(
            <div className="col-xs-3 flex-container">
                <a href="#" className={classes} style={{  opacity }}></a>
          </div>
      )
    );
  }
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Box);
