import $ from 'jquery'
import AppDispatcher from '../appDispatcher.js'
import ActionTypes from '../actionTypes.js'

let currentInfo;
export default {
  getLocation() {
    // $.get("http://api.wunderground.com/api/ce578d12f15f207a/geolookup/q/autoip.json", {})
    // .then(data => this.getWeather(data.location.zip))
    this.getWeather('fremont', 'ca')
  },
  getWeather(city, state) {
    console.log('something');
    $.get(`http://api.wunderground.com/api/ce578d12f15f207a/conditions/q/${state}/${city}.json`, {})
    .success( data => {
      currentInfo= {
        location: data.current_observation.display_location.full,
        tempF: data.current_observation.temp_f,
        tempC: data.current_observation.temp_c,
        skies: data.current_observation.weather,
        highF: "",
        lowF: ""
      }
      $.get(`http://api.wunderground.com/api/ce578d12f15f207a/forecast/q/${state}/${city}.json`, {})
      .success(data => {
        let forecastDays = data.forecast.simpleforecast.forecastday
        currentInfo.highF = forecastDays[0].high.fahrenheit;
        currentInfo.lowF = forecastDays[0].low.fahrenheit;
        let forecastInfo = [];
        for (let i = 1; i < 4; i++){
          let forecastDay = {
            date: forecastDays[i].date.weekday_short + " "+ forecastDays[i].date.day + '/' + forecastDays[i].date.month,
            highF: forecastDays[i].high.fahrenheit,
            highC: forecastDays[i].high.celsius,
            lowF: forecastDays[i].low.fahrenheit,
            lowC: forecastDays[i].low.celsius,
            skyImg: forecastDays[i].icon_url
          }
          forecastInfo.push(forecastDay)
        }
        AppDispatcher.dispatch({
          actionType: ActionTypes.GET_WEATHER,
          weather: currentInfo,
          forecast: forecastInfo
        })
      })
    })
  }
}
