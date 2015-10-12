import React from "react";
        // <div>sky</div>
export default React.createClass({
  style () {
    return {
        height: "auto",
        width: "auto",
        border: "silver solid 1px",
        padding: "5px",
        display: "inline-block",
        backgroundColor: "white"
    }
  },
  render () {
    return(
      <div style={this.style()}>
        <h4>{this.props.forecast.date}</h4>
        <h3>{this.props.forecast.highF}&deg; F</h3>
        <h3>{this.props.forecast.lowF}&deg; F</h3>
          <div align='center'><img src={this.props.forecast.skyImg}></img></div>
      </div>
    )
  }
})
