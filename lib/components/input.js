import React from 'react'
import WeatherActions from '../actions/weatherActions.js'

export default React.createClass({
  handleSubmit (event) {
    event.preventDefault();
    WeatherActions.getWeather(this.refs.city.value, this.refs.state.value);
    this.refs.city.value = '';
    this.refs.state.value = '';
  },
  style () {
    return {
      textAlign: 'center'
    }
  },
  render () {
    return (
      <div className='columns small-12 small-centered input'>
        <div className='row'>
          <h1 style={this.style()}>Weather</h1>
          <div className='medium-11 columns small-centered'>
            <form onSubmit={this.handleSubmit}>
              <div className='small-5 columns'>
                <input type="text" ref='city' placeholder="City or Zip Code"/>
              </div>
              <div className='small-5 columns'>
                <input ref='state' type="text" placeholder="Two letter state code"/>
              </div>
              <div className='small-2 columns'>
                <button className='button round tiny' type='submit'>GO!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
});
