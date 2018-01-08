require('es6-promise');
import fetch from 'isomorphic-fetch'

export const REQUEST_GET_BUSINESS = 'REQUEST_GET_BUSINESS';
export const RECEVICE_GET_BUSINESS = 'RECEVICE_GET_BUSINESS';
function requestGetBusiness() {
    return { type: REQUEST_GET_BUSINESS };
};
function receviceGetBusiness(items) {
    return { type: RECEVICE_GET_BUSINESS, items };
}

export const fetchGetBusiness = () => {
    return dispatch => {
        dispatch(requestGetBusiness())
        return fetch(`/api/home/getbuiness`, { method: 'POST' })
            .then(response => response.json())
            .then(json => dispatch(receviceGetBusiness(json)))
    }
}

