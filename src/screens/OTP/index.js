import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Button
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';


export default class OTP extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <View style = {style.wrapper}>
        <Text>Welcome David, </Text>
        <Text>Kindly enter your 8 digits pin from your email...</Text>
        <KeyboardAwareScrollView>
          <TextInput
            returnKeyType = 'send'
            keyboardType = 'number-pad'
            textContentType = 'oneTimeCode'
            maxLength = {8}
          />
        </KeyboardAwareScrollView>

      </View>
    );
  }
}