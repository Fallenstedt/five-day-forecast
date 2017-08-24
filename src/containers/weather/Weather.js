import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';
import FiveDayList from '../../components/fiveDayList/fiveDayList';
import CurrentWeather from '../../components/currentWeather/currentWeather';


class Weather extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderWeather() {
    return (
      <div>
        <h1>{this.props.city}</h1>
        <CurrentWeather data={this.props.data} />
        <FiveDayList data={this.props.data} />
      </div>
    )
  }

  shouldRenderWeather() {
    if (this.props.isFetching || !this.props.data) {
      return (
        this.renderLoading()
      )
    } else {
      return (
        this.renderWeather()
      )
    }
  }

  render() {
    return (
      this.shouldRenderWeather()
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.weather.isFetching,
    data: state.weather.data,
    city: state.weather.city,
  }
}

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Weather)
