import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Sponsorship from './components/Sponsorship';
import Fundraising from './components/Fundraising';
import About from './components/About';
import ProductsContainer from './containers/ProductsContainer';
import DesignLabContainer from './containers/DesignLabContainer';
import TemplatesContainer from './containers/TemplatesContainer';
import AccountContainer from './containers/AccountContainer';
import reducer from './reducers';

const loggerMiddleware = createLogger();

//console.log(process.env.NODE_ENV);
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="lab" component={DesignLabContainer}/>
        <Route path="products" component={ProductsContainer}/>
        <Route path="templates" component={TemplatesContainer}/>
        <Route path="sponsorship" component={Sponsorship}/>
        <Route path="fundraising" component={Fundraising}/>
        <Route path="about" component={About}/>
        <Route path="account" component={AccountContainer}/>
      </Route>
        {/*}<Route path="rent" component={Rent}/>
          <Route path="/reviews/:review" component={Review}/>
        </Route>
        <Route path="*" component={NoMatch}/>*/}
    </Router>
  </Provider>
), document.getElementById('root'));
