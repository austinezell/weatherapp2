import React from 'react';
import Current from './current.js';
import Forecast from './forecast.js';
import Input from './input.js';
import WeatherActions from '../actions/weatherActions.js';
import $ from 'jquery';

import WeatherStore from '../stores/weatherStore.js';

export default React.createClass({
  getInitialState () {
    return {
      weather: {},
      forecast: []
    }
  },
  onChange () {
    this.setState(WeatherStore.returnWeather());
  },
  componentDidMount (){
    WeatherActions.getLocation();
    WeatherStore.addChangeListener(this.onChange);
  },
  changeBackground (skies) {
    switch (skies) {
    case 'Clear':
      $('body').css('background-image', 'url(./skies/sunny.jpg)');
      break;
    case 'Partly Cloudy' || 'Mostly Cloudy':
      $('body').css('background-image', 'url(./skies/partlyCloudy.jpg)');
      break;
    default:
      $('body').css('background-image', 'url(./skies/cloudy.jpg)');
      break;
    }
  },
  render() {
    let forecasts = this.state.forecast.map( (day, i) =>
      <Forecast key={i} forecast={day}/>
    )
    let skies = this.state.weather.skies;
    if (skies) this.changeBackground(skies);
    return(
      <div className="small-8 columns small-centered">
        <Input/>
        <Current weather={this.state.weather} />
        <div className='small-12 columns forecasts'>
          {forecasts}
        </div>
      </div>
    )
  }
});
