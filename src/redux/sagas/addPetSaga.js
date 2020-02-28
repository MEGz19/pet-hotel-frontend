import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPetSaga() {
    yield takeLatest('SUBMIT_PET', submitPet);
}

// dispatches a POST for a new submission to the database
function* submitPet(action) {
    console.log('in submit pet', action.payload)
    try {
        yield axios.post(`/api/history`, action.payload);
        yield put({ type: 'GET_PETS' });
    } catch (error) {
        console.log('Error in submitPet generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default addPetSaga;