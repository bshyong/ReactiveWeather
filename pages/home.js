'use strict';

var React = require('react-native');
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
      input: '',
    }
  },

  setLocation: function() {
    return
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={{height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({input: text})}
          />
          <Text>{this.state.input}</Text>
          <TouchableHighlight onPress={this.setLocation}>
            <Text>
              Set Location
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
