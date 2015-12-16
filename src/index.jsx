import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Render routes and use History API for clientside
ReactDOM.render(
  <Router routes={ routes } history={ createBrowserHistory() } />,
  document.getElementById('root')
);
