'use strict';

var React = require('react-native');
var Request = require('superagent');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var HomePage = React.createClass({
  getInitialState: function() {
    return {
      response: '',
      initialPosition: 'unknown',
    }
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => console.error(error)
    );
  },

  setLocation: function() {
    this.setState({response: 'sending a request'})
    Request
      .post('http://postbin.hackyon.com/9142B0E5DE')
      .send({ text: this.state.input})
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (res.ok) {
          this.setState({response: 'Success! ' + JSON.stringify(res.body)});
        } else {
          this.setState({response: 'Oh no! error ' + res.text});
        }
      }.bind(this));
  },

  fetchWeather: function() {
    if (this.state.initialPosition.coords) {
      this.setState({response: 'fetching weather: ' + JSON.stringify(this.state.initialPosition.coords)})
      var requestUrl = 'https://api.forecast.io/forecast/a7eed883dbeb4897fc10e150bc938da0/' + this.state.initialPosition.coords.latitude + ',' + this.state.initialPosition.coords.longitude
      Request
        .get(requestUrl)
        .end(function(err, res){
          if (res.ok) {
            this.setState({response: 'Success! ' + JSON.stringify(res)});
          } else {
            this.setState({response: 'Oh no! error '});
          }
        }.bind(this));
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={{height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({input: text})}
          />
          <Text>{this.state.response}</Text>
          <TouchableHighlight onPress={this.fetchWeather}>
            <Text style={styles.instructions}>
              Fetch Weather
            </Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = HomePage;
