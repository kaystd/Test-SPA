import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';

import Main from './components/Main';
import ListOfEmployees from './components/ListOfEmployees';
import AddNote from './components/AddNote';
import Settings from './components/Settings';
import reducer from './components/reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const history = syncHistoryWithStore(hashHistory, store);
const style ={width:'400px', padding: '10px', margin:'auto'};

ReactDOM.render (
  <Provider store={store}>
    <Router history={history} className="container" style={style}>
      <Route exact path='/' component={Main} />
      <Route path='/employees-list' component={ListOfEmployees} />
      <Route path='/add-note' component={AddNote} />
      <Route path='/settings' component={Settings} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
