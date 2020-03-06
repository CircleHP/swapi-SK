import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import mainReducer from 'reducers';

const middlewares = [ReduxThunk];

/* global process */
if (process.env.NODE_ENV !== 'production') {
    const ReduxLogger = require('redux-logger').default;
    middlewares.push(ReduxLogger);
}

export const store = createStore(mainReducer, applyMiddleware(...middlewares));