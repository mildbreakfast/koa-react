import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MyComponent from './component';

render(<AppContainer component={MyComponent} />, document.getElementById('app'));

if(module.hot) module.hot.accept();
