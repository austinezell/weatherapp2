'use strict'

import AppDispatcher from '../appDispatcher.js'
import ActionTypes from '../actionTypes.js'

import {EventEmitter} from 'events'

const CHANGE_EVENT = "CHANGE";
let currentWeather, forecast;

class WeatherEmitter extends EventEmitter {
  returnWeather() {
    return {
      forecast: forecast,
      weather: currentWeather
    }
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let WeatherStore = new WeatherEmitter();

AppDispatcher.register(action =>{
  switch (action.actionType) {
    case ActionTypes.GET_WEATHER:
      currentWeather = action.weather;
      forecast = action.forecast;
      WeatherStore.emitChange();
    default:
      break
  }
})

export default WeatherStore;
