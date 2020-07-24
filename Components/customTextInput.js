import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Enter your name');

  return (
    <TextInput
      style={styles.input}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    width: '42%',
    padding: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    borderColor: 'red',
  },
});

export default UselessTextInput;
