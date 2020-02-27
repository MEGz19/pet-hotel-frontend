import { combineReducers } from 'redux';
import getOwnersReducer from './getOwnersReducer';
import getPetsReducer from './getPetsReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
    getOwnersReducer,
    getPetsReducer,
});

export default rootReducer;