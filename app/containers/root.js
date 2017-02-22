'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Weather from '../components/weather';
import * as weatherActions from '../actions/weather-actions';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

// @connect(state => ({
//   state: state.counter
// }))
class WeatherApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weatherReducer, actions } = this.props;
    //console.log(user.temp_c);
    //console.log(user.count);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{top:64, justifyContent: 'center', color: 'green', fontSize: 18 }}>
          Weather of Coimbatore city
        </Text>

        <Weather
          weather={weatherReducer}
          {...actions} />

      </View>
    );
  }
}


// "state.weatherReducer" is set in reducers/index.js
export default connect(state => ({
    weatherReducer: state.weatherReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(weatherActions, dispatch)
  })
)(WeatherApp);
