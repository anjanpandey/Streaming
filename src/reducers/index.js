import { combineReducers} from 'redux';
import authReduder from './authReducer';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReduder,
    form: formReducer,
    streams: streamReducer
});