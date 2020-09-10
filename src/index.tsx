import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // <React.StrictMode> 严格模式
    <HashRouter>
      <App />
    </HashRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
