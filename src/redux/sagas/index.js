import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { UPDATE_PLACE, updateForecast, apiCallError } from './../actions';
import { APPID } from './apikey.js';

export function* watcherSaga() {
  yield takeLatest(UPDATE_PLACE, workerSaga);
}

const fetchForecast = (city, country) => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&APPID=${APPID}`
  })
}

function* workerSaga(action) {
  try {
    const { city, country } = action.payload;

    const response = yield call(fetchForecast,[city, country]);
    const forecast = response.data.list;

    yield put(updateForecast(forecast));
  } catch (error) {
    yield put (apiCallError(error))
  }
}