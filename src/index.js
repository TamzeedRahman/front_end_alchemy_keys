import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_live_51KZITtL5UxYgXGvL54bja7YGTEZEayi2qzO8Lt8ifh3wZtbT2WuRGjIMJ5pkgsDkkgr2xgwcZKl7CqTgWjR20Fo800LulekYCa'
);

// ^ This is the public key for the test environment

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
        <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
