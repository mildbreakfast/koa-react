import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, hashHistory } from 'react-router';
import MyComponent from './views/component';

render((<AppContainer>
          <Router history={ hashHistory }>
            <Route path="/" component={ MyComponent } />
          </Router>
       </AppContainer>), document.getElementById('app'));

if(module.hot) module.hot.accept();
