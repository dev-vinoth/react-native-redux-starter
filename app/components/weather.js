import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { getWeather, weather} = this.props;

    // if (!this.props.user) {
    //   return(
    //     <View>
    //       <TouchableOpacity onPress={getWeather} style={styles.button}>
    //         <Text>Weather</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
    console.log('http:'+weather.icon);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>{weather.location} {weather.region}</Text>
        <Text>{weather.temp_c}</Text>
        <Text>{weather.weather_condition}</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'http:'+weather.icon}}
        />

        <TouchableOpacity onPress={getWeather} style={styles.button}>
          <Text>Weather</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
