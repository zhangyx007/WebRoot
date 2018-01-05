import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import looger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import routeConfigure from './app/routes';
import reducers from './app/reducers/index';
import 'semantic-ui-css'

const store = createStore(reducers, applyMiddleware(looger, thunkMiddleware))

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory} routes={routeConfigure}></Router>
    </Provider>
), document.getElementById('root'))