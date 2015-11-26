import React from "react";

export default React.createClass({
  style () {
    return {
      textAlign: 'center'
    }
  },
  render () {
    return (
      <div style={this.style()} className='columns small-centered small-10 current animated zoomInRight'>
        <div>
          <h1>{this.props.weather.location}</h1>
          <h2>{this.props.weather.tempF}&deg;F &nbsp;&nbsp;&nbsp; ({this.props.weather.tempC}&deg;C)</h2>
        </div>
        <div>
          <h4><span className="low">Low:</span> {this.props.weather.lowF}&deg;F &nbsp;&nbsp;&nbsp; <span className='high'>High:</span> {this.props.weather.highF}&deg; F</h4>
        </div>
      </div>
      )
    }
  });
