import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, hashHistory } from 'react-router';
import MyComponent from './views/component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Router history={hashHistory}>
      <Route path="/" component={ MyComponent } />
    </Router>);
  }
}

render(<AppContainer component={App}/>, document.getElementById('app'));

if(module.hot) module.hot.accept();
