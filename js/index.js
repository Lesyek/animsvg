import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './App';

import { Home } from './pages';

const history = createBrowserHistory();

ReactDOM.render(<div>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>

</div>, document.getElementById('root'));
