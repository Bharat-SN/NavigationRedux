import { combineReducers } from 'redux';
import HollywoodReducer from './HollywoodReducer';
import BollywoodReducer from './BollywoodReducer'

const rootReducer = combineReducers({
    HollywoodReducer, BollywoodReducer
})

export default rootReducer;