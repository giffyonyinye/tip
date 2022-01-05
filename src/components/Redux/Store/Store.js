// import { createStore, applyMiddleware, compose } from "redux";
import { createStore } from "redux";
// import createSagaMiddleware from 'redux-saga';
import {reducers}  from '../Reducer/RootReducer';
// import {rootSaga} from "../Saga/RootSaga";

const Store = createStore(reducers)  

    // const sagaMiddleware = createSagaMiddleware();
    // const allMiddleware = applyMiddleware(sagaMiddleware);
    // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const store = createStore(
    //     reducers,
    //     state,
    //     composeEnhancer(allMiddleware)
    // );
    // sagaMiddleware.run(rootSaga);
    // return store

export default Store;
