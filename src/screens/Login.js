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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      getUser: '',
      getUserPass: '',
      name: 'abc',
      pass: '123',
    };
  }

  componentDidMount() {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getValueFunction();
      // The screen is focused
      // Call any action
    });
  }

  getValueFunction = async () => {
    try {
      await AsyncStorage.getItem('un').then((value) => {
        this.setState({ getUser: value }),
          console.log('User  ' + this.state.getUser);
      });
      await AsyncStorage.getItem('up').then((value) => {
        this.setState({ getUserPass: value }),
          console.log('Pass  ' + this.state.getUserPass);
      });
    } catch (err) {
      console.log(err);
    }
  };

  _signin = () => {
    if (
      (this.state.getUser === this.state.username &&
        this.state.getUserPass === this.state.password) ||
      (this.state.name === this.state.username &&
        this.state.pass === this.state.password)
      //&&this.state.getUser !== '' &&
      //this.state.getUserPass !== ''
    ) {
      this.props.navigation.navigate('test');
    } else {
      alert('User name or password incorrect');
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
          <View style={{ marginLeft: 10, marginTop: 30 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
              Welcome Back{' '}
            </Text>
            <Text style={{ opacity: 0.6 }}>Sign in to continue</Text>
          </View>

          <View style={{ marginTop: 20, paddingLeft: 10 }}>
            <Input
              placeholder="Email"
              containerStyle={styles.inp}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
              autoCapitalize={'none'}
              onSubmitEditing={() => {
                this.setState({
                  clearInput: !this.state.clearInput,
                });
              }}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              containerStyle={styles.inp}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              autoCapitalize={'none'}
            />

            <TouchableOpacity style={styles.btn} onPress={this._signin}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  paddingTop: 10,
                  color: 'white',
                }}>
                Sign in
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('forget');
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  marginTop: 10,
                  marginRight: 40,
                  opacity: 0.5,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 120,
              marginTop: 30,
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: 30,
                marginRight: 10,
              }}></View>
            <Text> Or</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: 30,
                marginLeft: 10,
              }}></View>
          </View>

          <View style={{ marginTop: 60 }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginLeft: 60 }}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{ opacity: 0.5 }}>Don't have an account? </Text>
              <Text style={{ color: '#1e90ff' }}>Create Now</Text>
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

export default Login;
