import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from  './style';
import {GlobalStyle1} from  './statics/iconfont/iconfont';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <GlobalStyle1 />
  </React.StrictMode>,
  document.getElementById('root')
);