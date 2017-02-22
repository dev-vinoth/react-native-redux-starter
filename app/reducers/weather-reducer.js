import * as types from '../actions/actionTypes';

const initialState = {
  userData: '',
  temp_c: '',
  weather_condition: '',
  icon: '',
  location: '',
  region: ''

  // temp_c: '27°C',
  // weather_condition: 'cloudy',
  // icon: '//cdn.apixu.com/weather/64x64/day/116.png',
  // location: 'Coimbatore',
  // region: 'TamilNadu'
};

export default function weather(state = initialState, action = {}) {
  switch (action.type) {

    case types.WEATHER:
    //console.log(action.temp_c)
      return {
        ...state,
        temp_c: action.payload['current']['temp_c'] + '°C',
        weather_condition: action.payload['current']['condition']['text'],
        icon: action.payload['current']['condition']['icon'],
        location: action.payload['location']['name'] + ',',
        region: action.payload['location']['region']
      };

    default:
      return state;
  }
}
