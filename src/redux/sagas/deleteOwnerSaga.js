import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_OWNER', deleteOwner);
}

function* deleteOwner(action) {
    // console.log('in delete owner', action.payload);
    let response = yield axios.delete(`/api/owners/${action.payload}`);
    yield put ({ type: 'SET_OWNERS', payload: response.data}); // need index value?
    yield put ({ type: 'GET_OWNERS'});
}

export default deleteSaga;