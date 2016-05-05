import React, { Component } from 'react';
import MotionComponent from './motion';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toISOString(), isOn: false };
  }

  toggle() { this.setState({ isOn: !this.state.isOn }); }

  render() {
    return (<div>Hello World Updated
      <br/>
      { JSON.stringify(this.state) }
      <br/>
      <button onClick={::this.toggle}>Toggle</button>
      {this.props.children}
      <MotionComponent/>
    </div>);
  }
};
