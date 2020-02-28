import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_PET', deletePet);
}

function* deletePet(action) {
    console.log('in delete pet', action.payload);
    let response = yield axios.delete(`/api/history/${action.payload}`);
    yield put ({ type: 'SET_PET', payload: response.data}); // need index value?
    yield put ({ type: 'GET_PET'});
}

export default deleteSaga;