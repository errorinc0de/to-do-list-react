import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './Title.js';

ReactDOM.render(
  <React.StrictMode>
    <Head id="heading">
    </Head>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);