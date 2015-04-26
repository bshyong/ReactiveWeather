'use strict'

var React = require('react-native');
var AddLocationPage = require('../pages/add_location');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;

var SearchBar = React.createClass({
  render() {
    return (
      <TextInput
        style={styles.searchBar}
        placeholder="Add a location"
        autoFocus={true}
      />
    )
  }
});

var SearchButton = React.createClass({
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
          <Text style={this.props.styles}>Search</Text>
        </TouchableHighlight>
      </View>
    )
  }
});

var AddLocationButton = React.createClass({

  _onSearchButtonPress: function() {
    return
  },

  renderSearchButton: function() {
    return (
      <SearchButton
        onPress={this._onSearchButtonPress}
        styles={styles.searchButton}
      />
    )
  },

  _onPress: function() {
    this.props.toRoute({
      name: 'Add a location',
      component: AddLocationPage,
      rightCorner: SearchButton,
      titleComponent: SearchBar,
    })
  },

  render: function() {
    return (
      <View style={{margin: 10}}>
        <TouchableHighlight onPress={this._onPress}>
          <Text style={styles.button}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = {
  searchButton: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#3f88bf',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4,
  }
}

module.exports = AddLocationButton;
