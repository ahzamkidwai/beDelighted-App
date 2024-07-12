import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigation'; 
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { AuthProvider } from './src/context/AuthContext';


export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
      <AuthProvider>

      <StackNavigator />
      </AuthProvider>
      {/* <Text>Hello</Text> */}
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
