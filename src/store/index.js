import { createStore } from "redux";

import rootReducer from './reducers' 

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

export default store;
