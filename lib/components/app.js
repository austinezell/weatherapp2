import React from 'react';
import Current from './current.js'
import Forecast from './forecast.js'
import Input from './input.js'
import WeatherActions from '../actions/weatherActions.js'

import WeatherStore from '../stores/weatherStore.js'

export default React.createClass({
  getInitialState () {
    return {
      weather: {},
      forecast: []
    }
  },
  style () {
    return {
      textAlign: 'center'
    }
  },
  onChange () {
    this.setState(WeatherStore.returnWeather())
  },
  componentDidMount (){
    WeatherActions.getLocation()
    WeatherStore.addChangeListener(this.onChange)
  },
  render() {
    console.log(Array.isArray(this.state.forecast));
    let forecasts = this.state.forecast.map( (day, i) =>
      <Forecast key={i} forecast={day}/>
    )
    console.log(forecasts);
    return(
      <div className="small-8 columns small-centered">
        <Input/>
        <Current weather={this.state.weather} />
        <div className='small-12 columns small-centered'>
          {forecasts}
        </div>
      </div>
    )
  }
})


// <Forecast/>
// <Forecast/>
// <Forecast/>
