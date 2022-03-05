import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Checkout, CheckoutSuccess, CheckoutFail } from './Checkout';
import Payments from './Payments';
import Customers from './Customers';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">
                <span  role="img">
                  
                </span>{''}
                Checkout
              </Link>
            </li>
            <li>
              <Link to="/payments">
                <span role="img">
                  
                </span>{' '}
                Payments
              </Link>
            </li>
            <li>
              <Link to="/customers">
                <span  role="img">
                  
                </span>{' '}
                Customers
              </Link>
            </li>
            <li>
              <Link to="/subscriptions">
                <span  role="img">
                  
                </span>{' '}
               possible Subscriptions 
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
          
          
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2> boiler test </h2>
    </>
  );
}

export default App;
