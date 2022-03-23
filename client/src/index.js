import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

