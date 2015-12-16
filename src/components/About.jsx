import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
  render() {
    return (
      <span><Link to="/">Home</Link> | About</span>
    );
  }
}
