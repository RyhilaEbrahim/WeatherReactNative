/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WeatherView from './App/Views/WeatherView';

var BG_HOT = "#fb9f4d";
var BG_WARM = "#fbd84d";
var BG_COLD = "#00abe6";
var REQUEST_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&";

 class AwesomeProject extends Component {
 constructor(props) {
    super(props);
    this.state = { 
        weatherData : null,
       backgroundColor:"#FFF"
     };
  }


 componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      location =>{
        var formattedURL = REQUEST_URL + "lat="+location.coords.latitude+"&lon="+location.coords.longitude+"&APPID=28c25e68d259ea7e5132eedc373cae1f";
        debugger;
        console.log(formattedURL);
        this.fetchData(formattedURL);
      },
      error =>{
        console.log(error);
      });
  }

  fetchData(url){
    fetch(url)
    .then((response) => response.json())
    .then((reponseData) => {
        var data = reponseData;
           this.setState({
             weatherData:data,
           });
    })
.done();
 
  }
 renderLoadingView () {
return (
  <View style={styles.loading}>
    <Text style={styles.loadingText}>
      Loading Weather
    </Text>
  </View>
);
}

      render() {
      if (!this.state.weatherData) {
              return this.renderLoadingView();
      }
      var city = this.state.weatherData.name;
      var country = this.state.weatherData.sys.country;
      var temp = parseInt(this.state.weatherData.main.temp).toFixed(0);
      var weather = this.state.weatherData.weather[0].icon.toString();
      var description = this.state.weatherData.weather[0].description;
      console.log(weather);
      debugger;

    return (
     
      <View style={[styles.container]}>
       <WeatherView weather={weather} temperature={temp} city={city} country={country} description={description} />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading :{
    backgroundColor: '#840bed',
  },
  loadingText:{
    color: '#fff',
    backgroundColor: '#bf00f9',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
