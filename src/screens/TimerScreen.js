import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Input, SocialIcon, Image } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import PushNotification from 'react-native-push-notification';
// const tm = this.props.navigation.item;
// console.log(tm);

export default class TimerScreen extends Component {
  state = {
    message1: this.props.route.params.Item,
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert(
        'Go Back',
        'Are you sure you want to go back?',
        [
          { text: 'Cancel', onPress: () => {}, style: 'cancel' },
          { text: 'Back', onPress: () => this.handleBack() },
        ],
        { cancelable: false },
      );
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBack() {
    //global.screenName = "Dashboard";
    return this.props.navigation.navigate('test');
  }

  cancelNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  _Logout = async () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  render() {
    console.log('Time' + this.state.message1);
    return (
      <View style={styles.Container}>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <Text
            style={{
              marginTop: 8,
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            {this.state.getUser}
          </Text>

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
        </View>

        <View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.img}
            />
          </View>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 140 }}>
            Notify
          </Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <CountDown
            until={this.state.message1 * (24 * (60 * 60))}
            // onFinish={() => alert('finished')}
            //onPress={() => alert('hello')}
            size={35}
            digitStyle={{ backgroundColor: '#1e90ff' }}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 80, marginLeft: 85 }}
          onPress={() => {
            this.cancelNotification();
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Cancel notification</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
  },
  imgContainer: {
    width: 130,
    height: 120,
    marginLeft: 120,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: '#1e90ff',
    width: 100,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 225,
    marginTop: 10,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
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
});
