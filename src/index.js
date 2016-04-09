require('./app.scss')

import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {Router, Route, IndexRoute} from 'react-router'

render(
  <Router history={browserHistory} renderLoading={() => <div>Loading...</div>}>
    <Route path="/" component={require('./App')}>
    </Route>
    <Route path="/dashboard" component={require('./App')}>
    </Route>
    <Route path="/add" component={require('./App')}>
    </Route>
  </Router>,
  document.querySelector('#app')
)
