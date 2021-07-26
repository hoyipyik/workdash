/**
 * 用App component替换空html页面id为root的div， 同时启用react-route-dom路由
 * @module
 * index
 * @author 贺烨毅 2019210737
 * 
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//离线使用 安装为webapp的设定选项
serviceWorkerRegistration.register();

reportWebVitals();
