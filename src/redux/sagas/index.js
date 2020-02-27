import { all } from 'redux-saga/effects';
import addOwnerSaga from './addOwnerSaga';
import addPetSaga from './addPetSaga';
import deleteOwnerSaga from '/.deleteOwnerSaga';
import deletePetSaga from './deletePetSaga';
import getOwnersSaga from './getOwnersSaga';
import getPetsSaga from './getPetsSaga';
import petStatusSaga from './petStatusSaga';

export default function* rootSaga() {
    yield all([
        addOwnerSaga(),
        addPetSaga(),
        deleteOwnerSaga(),
        deletePetSaga(),
        getOwnersSaga(),
        getPetsSaga(),
        petStatusSaga(),
    ]);
}