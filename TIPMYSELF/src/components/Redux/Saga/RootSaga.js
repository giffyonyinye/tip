import { all } from 'redux-saga/effects';
import { logInSaga } from './LoginSaga';

export const rootSaga = function* () {
   yield all([logInSaga()]);
}