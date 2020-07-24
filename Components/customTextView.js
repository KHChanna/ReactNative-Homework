import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class CustomText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.text, this.props.style]}>{this.props.children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    fontSize: 24,
  },
});
