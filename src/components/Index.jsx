import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Index Counter: { this.state.counter }</h3>
        <span>Home | <Link to="/about">About</Link></span>
      </div>
    );
  }
}
