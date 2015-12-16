import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import routes from './src/routes';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';

const app = express();
const compiler = webpack(config);

delete process.env.BROWSER;

// Configure statics and Jade
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

// Configure Webpack
app.use(require('webpack-dev-middleware')(compiler, {
  stats: {
    colors: true,
  },
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// Use React Router
app.get('*', (request, response) => {
  match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const markup = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
      response.render('index', { content: markup });
    } else {
      response.status(404).send('Not Found');
    }
  });
});

// Create Server
app.listen(3000, 'localhost', error => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
