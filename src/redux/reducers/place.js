import * as types from './../actions'

const place = (
  state = {
    city: null,
    country: null
  }, 
  action
) => {
  switch(action.type){
    case types.UPDATE_PLACE:
      return {...state, city: action.payload.city, country: action.payload.country};
    default:
      return state;
  }
}

export default place;