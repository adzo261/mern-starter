import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../images/codeagni.png';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: undefined
    };
    axios.get('/api/database').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <h1>MERN Starter</h1>

        <div className="container">
          {status === undefined ? (
            'Connecting to database ...'
          ) : (
            <div
              className={status === true ? 'led-green' : 'led-red'}
              style={{ display: 'inline-block' }}
            />
          )}
          {status !== undefined &&
            (status === false
              ? 'Database connection failed'
              : 'Database connection successful')}
        </div>
        <div id="footer">
          <img
            src={Logo}
            alt="Codeagni"
            width="133"
            height="35"
            style={{ marginRight: '20px' }}
          />
        </div>
      </div>
    );
  }
}
