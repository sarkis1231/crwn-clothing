import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [logger, reduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;

