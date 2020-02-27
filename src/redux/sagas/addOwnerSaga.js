import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOwnerSaga() {
    yield takeLatest('SUBMIT_OWNER', submitOwner);
}

// dispatches a POST for a new submission to the database
function* submitOwner(action) {
    yield console.log('in submit owner', action.payload)
    try {
        yield axios.post(`/api/owners`, action.payload);
        yield put({ type: 'GET_OWNERS' });
    } catch (error) {
        console.log('Error in submitOwner generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default addOwnerSaga;