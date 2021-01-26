import {combineReducers} from 'redux';
import productReducer from './productReducer';

const DEFAULT_REDUCER = (initstate, action)=>{
    return {
        key: "HELlO QD"
    }
}
const rootReducer = combineReducers({
    DEFAULT: DEFAULT_REDUCER,
    products: productReducer,
});

export default rootReducer;