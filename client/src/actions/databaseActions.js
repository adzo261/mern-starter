import axios from 'axios';
import FETCH_DB_STATUS from '../constants/actionTypes';

const fetchDBStatus = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/database',
    timout: 1000
  }).then(response => {
    dispatch({
      type: FETCH_DB_STATUS,
      payload: response.data.status
    });
  });
};
export default fetchDBStatus;
