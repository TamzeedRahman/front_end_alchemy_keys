import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Checkout, CheckoutSuccess, CheckoutFail } from './Checkout';
import Payments from './Payments';
import Customers from './Customers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <h2>Stripe React + Node.js</h2>
    </>
  );
}

export default App;
