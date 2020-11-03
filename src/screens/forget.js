import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon, Text, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default class forget extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      getemail: '',
      getuserPassword: '',
      getconfirmPassword: '',
    };
  }
  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getValueFunction();
      this.getValuePassFunction();
      // The screen is focused
      // Call any action
    });
  }
  getValueFunction = async () => {
    try {
      await AsyncStorage.getItem('em').then((value) => {
        {
          this.setState({ getemail: value }),
            console.log('Email  ' + this.state.getemail);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  getValueUpdateFunction = async () => {
    try {
      if (this.state.getemail === this.state.email) {
        AsyncStorage.getItem('up')
          .then((value) => {
            {
              console.log('function Val ' + value);
              AsyncStorage.setItem('up', this.state.getuserPassword);
              console.log('UP Pass  ' + this.state.getuserPassword);
            }
          })
          .done();
      }
    } catch (err) {
      console.log(err);
    }
  };
  getValuePassFunction = async () => {
    try {
      await AsyncStorage.getItem('up').then((val) => {
        //this.setState({ getuserPassword: value }),
        console.log('PPP  ' + this.state.getuserPassword);
        AsyncStorage.getItem('cp').then((val) => {
          //this.setState({ getuserPassword: value }),
          console.log('CPP  ' + this.state.getconfirmPassword);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <View>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/images/Logo.png')}
                style={styles.img}
              />
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 140 }}>
              Notify
            </Text>
          </View>

          <View style={{ marginTop: 20, paddingLeft: 10 }}>
            <Input
              placeholder="Email"
              containerStyle={styles.inp}
              autoCapitalize={'none'}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              containerStyle={styles.inp}
              value={this.state.getuserPassword}
              onChangeText={(data) => this.setState({ getuserPassword: data })}
              autoCapitalize={'none'}
            />
            <Input
              placeholder="Confirm Password"
              containerStyle={styles.inp}
              value={this.state.confirmPassword}
              onChangeText={(data) => this.setState({ confirmPassword: data })}
              //autoCapitalize={'none'}
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={this.getValueUpdateFunction}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  paddingTop: 10,
                  color: 'white',
                }}>
                Update
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  marginTop: 10,
                  marginRight: 40,
                  opacity: 0.5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    width: 100,
    height: 120,
    marginLeft: 125,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: '#1e90ff',
    width: 300,
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
    width: 320,
    height: 60,
    opacity: 0.5,
  },
});
