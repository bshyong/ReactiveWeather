'use strict'

var React = require('react-native');
var AddLocationPage = require('../pages/add_location');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var AddLocationButton = React.createClass({
  _onPress: function() {
    this.props.toRoute({
      name: 'Add a location',
      component: AddLocationPage,
      rightCorner: React.createClass({render: function(){return false}}),
    })
  },

  render: function() {
    return (
      <View style={{margin: 10}}>
        <TouchableHighlight onPress={this._onPress}>
          <Text style={styles}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
}

module.exports = AddLocationButton;
