'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var AddLocationPage = React.createClass({

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
    }
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => console.error(error)
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add a location here
        </Text>
        <Text style={styles.welcome}>
          Current location: {JSON.stringify(this.state.initialPosition)}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = AddLocationPage;
