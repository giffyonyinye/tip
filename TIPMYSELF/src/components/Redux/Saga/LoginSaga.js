import { put, takeLatest ,call } from 'redux-saga/effects';
import { logInSuccess } from '../Action/Action';

const url = "https://localhost:5001/api/User/login";
const login = () => {
    return fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            
        })
        .then(res => res.json)
        .catch((err) => {
            console.log(err);
            throw err;
        })
}
export const logInSaga = function* () {
    yield takeLatest("LOGIN_ACTION", logInWatcher);
    
}
function* logInWatcher (payload) {
    try{
        const userLogin =  yield call(login);
        yield put(logInSuccess(userLogin));
    } catch(e) {
        yield put({type:'LOGIN_FAILED', message:e.payload})
        console.log("err")
    }
}