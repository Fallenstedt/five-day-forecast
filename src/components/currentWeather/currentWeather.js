import React, { Component } from 'react';
import { capitalize } from '../../util';

class CurrentWeather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: props.data.get('day-0')
    }
  }

  render() {
    const temperature = this.state.weather.temp.day;
    const { main, description } = this.state.weather.weather[0];
    return (
      <div>
        Today's High
        <h2>{temperature} &#176; F</h2>
        <p>{main}</p>
        <p>{capitalize(description)}</p>
      </div>
    );
  }
}

export default CurrentWeather
