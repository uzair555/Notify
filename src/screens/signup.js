import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon, Text, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      Birth: '',
      phone_no: '',
      userPassword: '',
      confirmPassword: '',
    };
  }

  componentDidMount() {
    this.getValueFunction();
  }
  saveValueFunction = async () => {
    if (this.state.userName === '' || this.state.userPassword === '') {
      alert('Please fill data');
      return;
    } else {
      try {
        AsyncStorage.setItem('un', this.state.userName).then(() => {
          AsyncStorage.setItem('em', this.state.email).then(() => {
            AsyncStorage.setItem('br', this.state.Birth).then(() => {
              AsyncStorage.setItem('pn', this.state.phone_no).then(() => {
                if (this.state.userPassword === this.state.confirmPassword) {
                  AsyncStorage.setItem('up', this.state.userPassword).then(
                    () => {
                      //this.getValueFunction();

                      alert('Registration Successfull signin now');
                      this.props.navigation.navigate('Login');
                    },
                  );
                } else {
                  alert('Password did not match');
                }

                AsyncStorage.setItem('cp', this.state.confirmPassword).then();
              });
            });
          });

          // this.setState({ userName: '' });
        });

        // console.log('User' + userName);

        // await AsyncStorage.setItem('em', this.state.email);
        // this.setState({ email: '' });

        // await AsyncStorage.setItem('br', this.state.Birth);
        // this.setState({ Birth: '' });

        // await AsyncStorage.setItem('pn', this.state.phone_no);
        // this.setState({ phone_no: '' });

        // await AsyncStorage.setItem('up', this.state.userPassword);
        // this.setState({ userPassword: '' });
        // console.log(this.state.userPassword);

        // if (this.state.confirmPassword) {
        //   await AsyncStorage.setItem('cp', this.state.confirmPassword);
        //   this.setState({ confirmPassword: '' });
        // } else {
        //   alert('Please fill data');
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  getValueFunction = async () => {
    try {
      await AsyncStorage.getItem('un').then((value) =>
        this.setState({ userName: value }),
      );
      console.log('SIUser  ' + this.state.userName);
      await AsyncStorage.getItem('up').then((value) =>
        this.setState({ userPassword: value }),
      );
      console.log('SIPass  ' + this.state.userPassword);
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

          <View style={{ marginTop: 30, marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
              Create Account{' '}
            </Text>
            <Text style={{ opacity: 0.6 }}>Create an account to continue</Text>
          </View>

          <View style={{ marginTop: 20, paddingLeft: 10 }}>
            <Input
              placeholder="User Name"
              containerStyle={styles.inp}
              value={this.state.userName}
              onChangeText={(data) => this.setState({ userName: data })}
              autoCapitalize={'none'}
            />
            <Input
              placeholder="Email"
              containerStyle={styles.inp}
              value={this.state.email}
              onChangeText={(data) => this.setState({ email: data })}
              autoCapitalize={'none'}
            />
            <Input
              placeholder="Phone No"
              containerStyle={styles.inp}
              value={this.state.phone_no}
              onChangeText={(data) => this.setState({ phone_no: data })}
              autoCapitalize={'none'}
            />
            <Input
              placeholder="Birth"
              containerStyle={styles.inp}
              value={this.state.Birth}
              onChangeText={(data) => this.setState({ Birth: data })}
              autoCapitalize={'none'}
            />
            <Input
              placeholder="Password"
              containerStyle={styles.inp}
              value={this.state.userPassword}
              onChangeText={(data) => this.setState({ userPassword: data })}
              //autoCapitalize={'none'}
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
              onPress={this.saveValueFunction}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  paddingTop: 10,
                  color: 'white',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}

              // (this.getValueFunction,
              // () => {
              //   this.props.navigation.navigate('Login');
              // })
            >
              <Text style={{ opacity: 0.5, marginLeft: 25 }}>
                Already have an account?{' '}
              </Text>
              <Text style={{ color: '#1e90ff', marginLeft: 85 }}>Sign In</Text>
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

  btn: {
    backgroundColor: '#1e90ff',
    width: 300,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    marginTop: 20,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
  },
  inp: {
    width: 320,
    height: 60,
    opacity: 0.5,
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
});

export default Signup;
