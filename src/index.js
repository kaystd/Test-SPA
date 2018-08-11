import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from "history/createHashHistory";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import 'bootstrap/dist/css/bootstrap.css';

import Main from './components/Main';
import ListOfEmployees from './components/ListOfEmployees';
import AddNote from './components/AddNote';
import Settings from './components/Settings';
import reducer from './components/reducers'

const history = createHistory();
const routing = routerMiddleware(history);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, routing))
);

const style ={width:'400px', padding: '10px', margin:'auto'};

ReactDOM.render (
  <Provider store={store}>
    <ConnectedRouter history={history} className="" style={style}>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/employees-list' component={ListOfEmployees} />
        <Route path='/add-note' component={AddNote} />
        <Route path='/settings' component={Settings} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
