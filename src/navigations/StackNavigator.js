import * as React from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {
  NavigationContainer,
  createSwitchNavigator,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Home from '../screens/Home';
import TimeScreen from '../screens/TimerScreen';
import np from '../screens/np';
import test from '../screens/test';
import forget from '../screens/forget';

// import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="TimeScreen"
            component={TimeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="np"
            component={np}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="test"
            component={test}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="forget"
            component={forget}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default StackNavigator;
