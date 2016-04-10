require('./app.scss')

import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {Router, Route, IndexRoute, Redirect, Link} from 'react-router'
import { createStore } from 'redux'

render(
  <Router history={browserHistory} renderLoading={() => <div>Loading...</div>}>
    <Redirect from='/' to='dashboard' />
    <Route path="/dashboard" component={require('./Dashboard')}>
    </Route>
    <Route path="/add" component={require('./Add')}>
    </Route>
  </Router>,
  document.querySelector('#app')
)
