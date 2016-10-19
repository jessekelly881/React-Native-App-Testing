import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

var ProgressBar = require('react-native-progress-bar');


export default class TestApp extends Component {

  render() {
    return (
        <View>
          <ProgressBar style={{marginTop: 10, width: 300}}/>
        </View>
    )
  }
}


AppRegistry.registerComponent('TestApp', () => TestApp);

