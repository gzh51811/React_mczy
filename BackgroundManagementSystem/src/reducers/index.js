
import { combineReducers } from 'redux';
import auth from './auth';




//合并Reducer
const rootReducers = combineReducers({
    auth
});

export default rootReducers;