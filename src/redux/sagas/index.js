import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';

import { UPDATE_PLACE, updateForecast, apiCallError } from './../actions';
import { API_KEY } from './apikey.js';

export function* watcherSaga() {
  yield takeLatest(UPDATE_PLACE, workerSaga);
}

const fetchForecast = (city, country) => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&APPID=${API_KEY}`
  })
}

/**
 * Remove from the dt_txt value the time, keepig just the date,
 * in order to be able to group forecasts by day and returns the
 * updated array.
 * @param {obj} data 
 */
const sortForecast = (data) => {
  const newDate = data.map(item => (
    {...item, dt_txt: item.dt_txt.slice(0,10)}
  ));
  return _.mapValues(_.groupBy(newDate, 'dt_txt'))
}

function* workerSaga(action) {
  try {
    const { city, country } = action.payload;

    const response = yield call(fetchForecast,[city, country]);
    const forecast = response.data.list;

    const sortedForecast = sortForecast(forecast);

    yield put(updateForecast(sortedForecast));
  } catch (error) {
    yield put (apiCallError(error))
  }
}


