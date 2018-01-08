import * as _ from 'lodash'
import { REQUEST_GET_BUSINESS, RECEVICE_GET_BUSINESS } from '../../actions/main/home'

export function getBusiness(state = { items: [] }, action){
    switch (action.type) {
        case REQUEST_GET_BUSINESS:
            return Object.assign({}, state, {
                items: []
            });;
        case RECEVICE_GET_BUSINESS:
            return Object.assign({}, state, {
                items: action.items
            });
        default:
            return state;
    }

    return state;
}