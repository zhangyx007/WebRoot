import { combineReducers } from 'redux';
import { getBusiness } from './home'
import { getBusinDetail, getCategorys } from './detail'

let reducers = combineReducers({
    getBusiness,
    getBusinDetail
});

export default reducers;