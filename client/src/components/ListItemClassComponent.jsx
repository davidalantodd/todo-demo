import React, { Component } from 'react';

class ListItemClassComponent extends Component {
  render() {
    const { task, index } = this.props;

    return (
      <li>
        <h2>Class Component Title: {task.title}</h2>
        <p>Description: {task.description}</p>
        <p>Time: {task.time}</p>
        <p>Index: {index}</p>
      </li>
    );
  }
}

export default ListItemClassComponent;