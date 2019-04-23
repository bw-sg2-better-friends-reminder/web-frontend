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
};

const rootReducer = (state = initialState, action) => {
   switch(action.type) {
       case LOGIN_START:
       case FETCH_DATA_START:
            return {
            ...state,
            fetchingData: true
            };

        case LOGIN_SUCCESS: 
            console.log(action.payload);

            localStorage.setItem('token, action.payload.payload');

            return {
                ...state,
                fetchingData: false
            };

        case FETCH_DATA_SUCCESS:
            console.log(action.payload);

            return {
                ...state,
                fetchingData: false, 
            };

        default:
            return state;
   }
};

export default rootReducer;
