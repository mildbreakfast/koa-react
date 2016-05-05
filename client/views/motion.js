import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class MotionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { objs: [{ key: 1, name: 'Alisher'}, { key: 2, name: 'Reshila'}, { key: 3, name: 'Shil'}, { key: 4, name: 'Are'}] };
  }

  reorder() {
    const objs = this.state.objs.slice(0);
    objs.reverse();
    this.setState({ objs });
  }

  move() {
    const objs = this.state.objs.slice(0);
    const first = objs.shift();
    objs.push(first);
    this.setState({ objs });
  }

  random() {
    const objs = this.state.objs.slice(0);
    const rand = objs.splice(Math.ceil(Math.random()*(this.state.objs.length-1)), 1)[0];
    objs.unshift(rand);
    this.setState({ objs });
  }

  render() {
    return <div>
             <button onClick={::this.reorder}>Reverse</button>
             <button onClick={::this.move}>Move</button>
             <button onClick={::this.random}>Random</button>
             <div style={{ position: 'relative' }}>
               { this.state.objs.map((obj, i) =>
                   <Motion key={obj.key} style={{ x: spring(i * 30) }}>
                     { ({x}) => <div style={{position: 'absolute', color: '#fff', backgroundColor: '#000', top: `${x}px`}}> {obj.name} </div> }
                   </Motion>
                 ) }
             </div>
            </div>;
  }
};
