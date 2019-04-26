import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const login = credentials => dispatch => {
    
    dispatch({ type: LOGIN_START });

    return axios.post('http://localhost:5000', credentials)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: LOGIN_FAIL
        }));
}

export const getData = () => dispatch => {
axios.get('http://localhost:5000', {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(res => dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_DATA_FAIL,
      payload: err
    }))
}


