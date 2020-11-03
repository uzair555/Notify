import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import StackNavigator from './src/navigations/StackNavigator';
import {
  createSwitchNavigator,
  createAppContainer,
} from '@react-navigation/native';

var PushNotification = require('react-native-push-notification');

export class App extends Component {
  render() {
    return <StackNavigator />;
  }
}

export default App;
