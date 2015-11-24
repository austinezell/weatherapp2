import React from "react";

export default React.createClass({
  style () {
    return {
      textAlign: 'center'
    }
  },
  render () {
    return (
      <div style={this.style()} className='columns small-centered small-11 current'>
        <div>
          <h1>{this.props.weather.location}</h1>
          <h2>Temp: {this.props.weather.tempF}&deg; F ({this.props.weather.tempC}&deg; C)</h2>
        </div>
        <div>
          <h4>Low: {this.props.weather.lowF} &deg;F &nbsp;&nbsp;&nbsp; High: {this.props.weather.highF}&deg; F</h4>
        </div>
      </div>
      )
    }
  });
