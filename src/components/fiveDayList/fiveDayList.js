import React, { Component } from 'react';


class FiveDayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: props.data
    }
  }

  renderDays() {
    console.log(this.state.weather);
    var fiveDays = [...this.state.weather.values()]

    //we are not interested in current day
    fiveDays.shift();
    
    const days = fiveDays.map((day) => {
      return (
        <li key={day.dt}>
          {day.dt} -
          {day.temp.max}&#176;F
        </li>
      )
    })
    return days
  }

  render() {
    return (
      <div>
        Five Day Forecast
        <ul>
          {this.renderDays()}
        </ul>
      </div>
    )
  }
}

export default FiveDayList
