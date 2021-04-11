import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';
import {LogBox, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {colors} from './utils/colors';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Router />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}
