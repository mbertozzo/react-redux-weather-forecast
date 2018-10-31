export const UPDATE_PLACE = 'UPDATE_PLACE';
export const UPDATE_FORECAST = 'UPDATE FORECAST';
export const API_CALL_ERROR = 'API_CALL_ERROR';

export const updatePlace = (city, country) => {
  return {type: UPDATE_PLACE, payload:{city: city, country: country}}
}

export const updateForecast = (forecast) => {
  return {type: UPDATE_FORECAST, payload: forecast}
}

export const apiCallError = (error) => {
  return {type: API_CALL_ERROR, payload: error}
}