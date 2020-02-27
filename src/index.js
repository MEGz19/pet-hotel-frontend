import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
// import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
// import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js
import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware();

// const middlewareList = process.env.NODE_ENV === 'development' ?
//   [sagaMiddleware, logger] :
//   [sagaMiddleware];

// const store = createStore(
// //   rootReducer,
//   applyMiddleware(...middlewareList),
// );

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
    // <Provider 
    // store={store}
    // >
    <App />
    // </Provider>
    , document.getElementById('root'),
);

// serviceWorker.unregister();