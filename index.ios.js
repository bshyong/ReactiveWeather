// ReactiveWeather
// Created April 26, 2015 by Benjamin Shyong

'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var HomePage = require('./pages/home');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var homePage = {
  name: 'Home',
  component: HomePage,
}

var ReactiveWeather = React.createClass({
  render: function() {
    return (
      <Router firstRoute={homePage} />
    );
  }
});

AppRegistry.registerComponent('ReactiveWeather', () => ReactiveWeather);
