import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../images/codeagni.png';
import fetchDBStatus from '../actions/databaseActions';

class App extends Component {
  componentDidMount() {
    const { fetchDBStatus } = this.props;
    fetchDBStatus();
  }

  render() {
    const { status } = this.props;

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
          <a href="https://github.com/codeagni">
            <img
              src={Logo}
              alt="Codeagni"
              width="133"
              height="35"
              style={{ marginRight: '20px' }}
            />
          </a>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  fetchDBStatus: PropTypes.func.isRequired,
  status: PropTypes.bool
};
App.defaultProps = {
  status: undefined
};
const mapStateToProps = state => ({ status: state.db.status });

export default connect(mapStateToProps, { fetchDBStatus })(App);
