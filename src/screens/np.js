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
export class np extends Component {
  state = {
    message: '',
  };

  testNotification = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      onlyAlertOnce: false,

      message: this.state.message, // (required)
      date: new Date(Date.now() + 60 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      repeatInterval: 5,
      repeatType: 'minute',
    });
  };

  palceInputHandeler = (val) => {
    this.setState({
      message: val,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 40, marginLeft: 50 }}>
          <Text style={{ marginBottom: 15 }}>
            Write Down the Habbit you want to adopt
          </Text>

          <TextInput
            style={styles.placeInput}
            value={this.state.message}
            onChangeText={this.palceInputHandeler}></TextInput>

          <TouchableOpacity
            onPress={() => {
              this.testNotification();
              console.log(this.testNotification());
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Notify</Text>
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

export default np;
