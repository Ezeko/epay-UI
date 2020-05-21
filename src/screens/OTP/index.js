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
    this.state = {
        OTP: 0,
    };
  }

  render(){
    return(
      <View style = {style.container}>
          <View style = {style.wrapper} >
          <Text style = {style.text}>Welcome David, </Text>
          <Text style = {{fontFamily: 'uber-b'}}>Kindly enter your 8 digits pin from your email...</Text>
        <KeyboardAwareScrollView>
          <TextInput
            returnKeyType = 'send'
            keyboardType = 'number-pad'
            textContentType = 'oneTimeCode'
            placeholder = '8 - Digits OTP'
            maxLength = {8}
            returnKeyType = 'send'
            textAlign = 'center'
            style = {style.input}
          />
        </KeyboardAwareScrollView>
          </View>

      </View>
    );
  }
}