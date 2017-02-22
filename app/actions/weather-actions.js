import * as types from './actionTypes';
import weatherApi from '../api/weatherApiRes'

export function getWeather() {

      return dispatch =>  {
        weatherApi.getWeather().then( (res) => {
          console.log('res',res['current']['temp_c']);
          dispatch({
            type: types.WEATHER,
            payload: res
          })
        });
      }
}
