import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import PushNotification from 'react-native-push-notification';
import { Input, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export class Home extends Component {
  state = {
    message: '',
    message1: 0,
    message2: 0,
    getUser: '',
  };

  componentDidMount() {
    this.getValueFunction();
  }

  saveValueFunction = async () => {};

  getValueFunction = async () => {
    await AsyncStorage.getItem('un').then((value) =>
      this.setState({ getUser: value }),
    );
  };

  testNotification = () => {
    console.log(Number(this.state.message1) + Number(this.state.message2));
    var interval = Number(this.state.message1);
    var time = Number(this.state.message2) * 1000;

    console.warn(interval);

    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification',
      onlyAlertOnce: false,
      message: this.state.message, // (required)
      date: new Date(Date.now() + Number(time)), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      repeatInterval: Number(interval),
      repeatType: 'minute',
    });
  };

  palceInputHandeler = (val) => {
    this.setState({
      message: val,
    });
  };

  palceInputHandeler1 = (val) => {
    this.setState({
      message1: Number(val),
    });
  };
  palceInputHandeler2 = (val) => {
    this.setState({
      message2: Number(val),
    });
  };

  _Logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <TouchableOpacity style={styles.btn} onPress={this._Logout}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
                color: 'white',
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 8,
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            {this.state.getUser}
          </Text>
        </View>

        <View style={{ marginTop: 40, marginLeft: 50 }}>
          <Text style={{ marginBottom: 15 }}>
            Write Down the Habbit you want to adopt
          </Text>

          <TextInput
            style={styles.placeInput}
            value={this.state.message}
            onChangeText={this.palceInputHandeler}></TextInput>

          <Text style={{ marginBottom: 15, marginLeft: 50 }}>
            For How Many Times a Day
          </Text>

          <TextInput
            style={styles.placeInput}
            //keyboardType="numeric"
            value={this.state.message1}
            onChangeText={this.palceInputHandeler1}></TextInput>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginBottom: 15, marginLeft: 10, paddingTop: 15 }}>
              Notify Me For every
            </Text>
            <TextInput
              style={styles.placeInput1}
              //keyboardType="numeric"
              value={this.state.message2}
              onChangeText={this.palceInputHandeler2}></TextInput>
            <Text style={{ marginBottom: 15, marginLeft: 10, paddingTop: 15 }}>
              Hours
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.testNotification();
              this.props.navigation.navigate('TimeScreen');
              // this.onSubmitHandeler();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    padding: 16,
    backgroundColor: '#1e90ff',
    borderRadius: 24,
    width: 200,
  },
  buttonTitle: {
    color: 'white',
  },
  placeInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 10,
  },
  placeInput1: {
    width: '20%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 10,
  },
  btn: {
    backgroundColor: '#1e90ff',
    width: 100,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
  },
  inp: {
    width: '70%',
    opacity: 0.5,
  },
});

export default Home;
