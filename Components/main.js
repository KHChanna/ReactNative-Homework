import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AppContext} from '../Contexts/AppContext';
import CustomButton from './customButton';

export default function AppComponent() {
  const {state, incrementAge, decrementAge} = useContext(AppContext);
  return (
    <View>
      <View>
        {/* <Text>My Name is {state.name}</Text> */}
        <Text>The Number is {state.number}</Text>
      </View>

      <CustomButton
        text="-"
        onPress={() => {
          console.log(decrementAge);
        }}
      />

      <Button onPress={incrementAge} title="+" color="#841584" />
    </View>
  );
}
