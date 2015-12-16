import React from 'react';
import Test from './Test.jsx';

if (process.env.BROWSER) {
  require('../assets/stylesheets/test.scss');
}

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from React</h1>
        { this.props.children }
        <Test />
      </div>
    );
  }
}
