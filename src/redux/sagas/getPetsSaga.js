import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET request for Pets
function* getPets() {
    // console.log('getting all pets/history from server');
    try {
        let response = yield axios.get('/api/history');
        //put is the same as dispatch and will go to our reducer
        //this saves it in redux
        yield put ({ type: 'SET_PETS', payload: response.data })
    } catch (err) {
        alert('error in GET Pet', err)
    }
}

// Watcher saga - waits for sagas to be called
function* getPetsSaga() {
    yield takeLatest('GET_PETS', getPets)
}

export default getPetsSaga;