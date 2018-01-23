require('es6-promise');
import fetch from 'isomorphic-fetch'

export const REQUEST_BUSINESINFO_DATA = 'REQUEST_BUSINESINFO_DATA';
export const RECEIVE_BUSINESINFO_DATA = 'RECEIVE_BUSINESINFO_DATA';
function requestBusinsinfoData(id) {
    return {
        type: REQUEST_BUSINESINFO_DATA
    };
}

function receiveBusinsinfoData(result) {
    return {
        type: RECEIVE_BUSINESINFO_DATA,
        result
    }
}

export const fetchBusinsinfoData = id => {
    return dispatch => {
        dispatch(requestBusinsinfoData(id));
        return fetch(`/api/detail/${id}`, { method: 'POST'})
            .then(res => res.json())
            .then(json => dispatch(receiveBusinsinfoData(json)))
    }
}