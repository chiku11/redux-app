import {combineReducers} from 'redux'
import CounterReducer from '../reducers/counterReducer';
import ContactReducer from '../reducers/contactReducer'

const rootReducer = combineReducers({
    CounterReducer,
    ContactReducer
});

export default rootReducer;