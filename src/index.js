import React, { useState } from 'react'
import { NavLink, RouteProps, Route, useNavigation } from "react-router-dom";
import Articles from '[./Articles';
import LoginForm from './LoginForm';
Import ArticleForm from './ArticleForm';
import axiosWithAuth from '../axios';
import { render } from 'react-dom'
import App from './App'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
