import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false
}

const rootReducer = () => {
    return {
        title: 'Login'
    };
};