/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CustomButton from './Components/customButton';
import CustomTextView from './Components/customTextView';
import CustomTextInput from './Components/customTextInput';
import {AppContextProvider} from './Contexts/AppContext';
import AppComponent from './Components/main';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        {/* <CustomButton
          text="Custom Button"
          onPress={() => {
            alert('Hi there!!!');
          }}
        />
        <CustomTextInput /> */}
        <AppContextProvider>
          <AppComponent />
        </AppContextProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
