import { REQUEST_BUSINESINFO_DATA, RECEIVE_BUSINESINFO_DATA } from '../actions/detail'

export function getBusinDetail(state = { result: {} }, action) {
    switch (action.type) {
        case REQUEST_BUSINESINFO_DATA:
            return Object.assign({}, state, {
                result: []
            });;
        case RECEIVE_BUSINESINFO_DATA:
            return Object.assign({}, state, {
                result: action.result
            });
        default:
            return state;
    }
}