import {combineReducers} from 'redux';
import filterReducer from './filterReducer';
import recordReducer from './recordReducer';

const rootReducer = combineReducers({
    record: recordReducer,
    filters: filterReducer
});

export default rootReducer;