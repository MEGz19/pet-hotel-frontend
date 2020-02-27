import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET request for Owners
function* getOwners(action) {
    console.log('getting all owners from server');
    try {
        let response = yield axios.get('/api/owners');
        //put is the same as dispatch and will go to our reducer
        //this saves it in redux
        yield put ({ type: 'SET_OWNERS', payload: response.data })
    } catch (err) {
        alert('error in GET Owner', err)
    }
}

// Watcher saga - waits for sagas to be called
function* getOwnersSaga() {
    yield takeLatest('GET_OWNERS', getOwners)
}

export default getOwnersSaga;