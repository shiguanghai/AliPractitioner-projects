import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Route from '../../components/router/index';
import Home from './mod/index';
import Simple from '../simple';
import Help from '../help';
import List from '../list';
import './index.scss';

/**
 * 如果前端使用了browserRouter,每次改变路由时，会向服务器发送请求，
 * 因为服务器未配置对应的路径指向对应的文件，
 * 自然导致出现404的情况.(对于初始化页面,即路由为/时,不会发送请求)
 */
ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/simple" component={Simple} />
    <Route path="/help" component={Help} />
    <Route path="/list" component={List} />
  </Router>,
  document.getElementById('container'),
);
