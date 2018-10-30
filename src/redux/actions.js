export const UPDATE_PLACE = 'UPDATE_PLACE';

export const updatePlace = (city, country) => {
  return {type: UPDATE_PLACE, payload:{city: city, country: country}}
}