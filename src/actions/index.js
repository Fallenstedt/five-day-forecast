import * as types from './actionTypes';
import axios from 'axios';

const ZIP = '97201';
const KEY = '92aa6311977d4ced945bf75808bd0097';
const URL = `http://api.openweathermap.org/data/2.5/forecast?zip=${ZIP},us&APPID=${KEY}`;

export function fetchWeather() {
  return function(dispatch) {
    dispatch(requestWeather())
    axios.get(URL).then((res) => {
      console.log(res);
      dispatch(receiveWeather(res.data))
    }).catch((error) => {
      console.error(error);
    })
  }
}

function requestWeather() {
  return {
    type: types.REQUEST_WEATER
  }
}

function receiveWeather(payload) {
  return {
    type: types.RECEIVE_WEATHER,
    payload
  }
}
