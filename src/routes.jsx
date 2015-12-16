import { Router, Route, IndexRoute } from 'react-router';
import React from 'react';

import Application from './components/Application.jsx';
import About from './components/About.jsx';
import Index from './components/Index.jsx';

export default (
  <Router>
    <Route path="/" component={ Application }>
      <IndexRoute component={ Index } />
      <Route path="about" component={ About } />
    </Route>
  </Router>
);
