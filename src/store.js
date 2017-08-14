import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';

export default createStore(reducer);
