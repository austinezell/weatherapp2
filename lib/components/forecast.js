import React from "react";

export default React.createClass({
  style () {
    return {
        height: "auto",
        width: "auto",
        margin: "5px",
        border: "silver solid 1px",
        padding: "5px",
        display: "inline-block",
        backgroundColor: "white",
        borderRadius: "5%"
    }
  },
  render () {
    return(
      <div className="animated zoomInLeft" style={this.style()}>
        <h4>{this.props.forecast.date}</h4>
        <h3 className="high">{this.props.forecast.highF}&deg; F</h3>
        <h3 className="low">{this.props.forecast.lowF}&deg; F</h3>
          <div align='center'><img src={this.props.forecast.skyImg}></img></div>
      </div>
    )
  }
});
