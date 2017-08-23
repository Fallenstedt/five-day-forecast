import React, { Component } from 'react';
import moment from 'moment';

export default class FiveDayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: groupWeatherByDay(props.data)
    }
  }

  render() {
    console.log(this.state.weather);
    return (
      <div>
        Five Day Forecast
      </div>
    )
  }

}


function groupWeatherByDay(list) {
  const days = new Map()
  list.forEach( (w) => {
    const day = moment(w.dt*1000).format("dddd Do MMMM")
    if( !days[day] ) days[day] = []
    days[day].push(w)
  })

  return days;
}
