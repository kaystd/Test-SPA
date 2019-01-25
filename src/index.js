import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import ListOfEmployees from './components/ListOfEmployees';
import AddNote from './components/AddNote';
import Settings from './components/Settings';
import reducer from './reducers'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render (
    <Provider store={store}>
    <HashRouter>
        <div className='container'>
            <Route exact path='/' component={Main} />
            <Route path='/employees-list' component={ListOfEmployees} />
            <Route path='/add-note' component={AddNote} />
            <Route path='/settings' component={Settings} />
        </div>
    </HashRouter>
    </Provider>,
    document.getElementById('root')
);
