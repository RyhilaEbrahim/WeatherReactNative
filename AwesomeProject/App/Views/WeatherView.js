

//var React = require('react-native')
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// the array of weather icons corresponding to their
// openweathermap equivalent code. you can see the weather icons at
// http://openweathermap.org/weather-conditions
var weatherIconArray = [];
weatherIconArray["01n"] = require("./weather_icons/weather-clear.png");
weatherIconArray["01d"] = require("./weather_icons/weather-clear.png");
weatherIconArray["02n"] = require("./weather_icons/weather-fewclouds.png");
weatherIconArray["02d"] = require("./weather_icons/weather-fewclouds.png");
weatherIconArray["03n"] = require("./weather_icons/weather-scatteredcloud.png");
weatherIconArray["03d"] = require("./weather_icons/weather-scatteredcloud.png");
weatherIconArray["04n"] = require("./weather_icons/weather-brokenclouds.png");
weatherIconArray["04d"] = require("./weather_icons/weather-brokenclouds.png");
weatherIconArray["09n"] = require("./weather_icons/weather-drizzle.png");
weatherIconArray["09d"] = require("./weather_icons/weather-drizzle.png");
weatherIconArray["10n"] = require("./weather_icons/weather-rain.png");
weatherIconArray["10d"] = require("./weather_icons/weather-rain.png");
weatherIconArray["11n"] = require("./weather_icons/weather-thunderstorm.png");
weatherIconArray["11d"] = require("./weather_icons/weather-thunderstorm.png");
weatherIconArray["13n"] = require("./weather_icons/weather-snow.png");
weatherIconArray["13d"] = require("./weather_icons/weather-snow.png");
weatherIconArray["50n"] = require("./weather_icons/weather-mist.png");
weatherIconArray["50d"] = require("./weather_icons/weather-mist.png");

var weatherBGArray = [];
weatherBGArray["01n"] = require("./weather_bg/sunnyday.jpg");
weatherBGArray["01d"] = require("./weather_bg/sunnyday.jpg");
weatherBGArray["02n"] = require("./weather_bg/brokenclouds.png");
weatherBGArray["02d"] = require("./weather_bg/brokenclouds.png");
weatherBGArray["03n"] = require("./weather_bg/scatteredcloud.jpg");
weatherBGArray["03d"] = require("./weather_bg/scatteredcloud.jpg");
weatherBGArray["04n"] = require("./weather_bg/brokenclouds.png");
weatherBGArray["04d"] = require("./weather_bg/brokenclouds.png");
weatherBGArray["09n"] = require("./weather_bg/rainyDay.jpg");
weatherBGArray["09d"] = require("./weather_bg/rainyDay.jpg");
weatherBGArray["10n"] = require("./weather_bg/rainyDay.jpg");
weatherBGArray["10d"] = require("./weather_bg/rainyDay.jpg");
weatherBGArray["11n"] = require("./weather_bg/lighting.jpg");
weatherBGArray["11d"] = require("./weather_bg/lighting.jpg");
weatherBGArray["13n"] = require("./weather_bg/snow.jpg");
weatherBGArray["13d"] = require("./weather_bg/snow.jpg");
weatherBGArray["50n"] = require("./weather_bg/mist.jpg");
weatherBGArray["50d"] = require("./weather_bg/mist.jpg");
// the components class register
export  default class  WeatherView extends Component {

  
	// the state variables that will be used but
	// also declaration of the propTypes the variables
	// are expected to be

    constructor(props) {
    super(props);
  this.state = { 
       	propTypes: {
		weather: React.PropTypes.string,
		temperature: React.PropTypes.int,
		city: React.PropTypes.string,
		country: React.PropTypes.string,
    description:React.PropTypes.string
  }
     };
  }

  	// the views render method
	render () {
		return (
			<View style={styles.centreContainer}>
      <Image source={weatherBGArray[this.props.weather]} style={styles.weatherBackground}>
                <Image source={weatherIconArray[this.props.weather]} style={styles.weatherIcon} />
                <Text style={styles.weatherText}>{this.props.temperature}&deg;</Text>
                <Text style={styles.weatherTextLight}>{this.props.city},</Text>
                <Text style={styles.weatherTextLight}>{this.props.country}</Text>
                <Text style={styles.weatherTextLight}>{this.props.description}</Text>
       </Image>
			</View>
    )
  }
};

// the components Styles
var styles = StyleSheet.create({
	centreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },
weatherBackground: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
},
weatherIcon: {
width: 200,
height: 200,
},
weatherText: {
fontSize: 62,
fontWeight: "bold",
color: "#FFFFFF",
textAlign: "center"
},
weatherTextLight: {
fontSize: 32,
fontWeight: "100",
color: "#FFFFFF",
textAlign: "center"
}
});
