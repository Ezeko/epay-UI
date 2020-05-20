import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import style from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  render() {
    return(
      <View style = {style.container} >
      <KeyboardAwareScrollView style = {style.wrapper}>
        <View style = {style.input}>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'next'
            textContentType = 'name'
            placeholder = 'First Name'
            autoCompleteType = 'name'
            blurOnSubmit = {true}
            textAlign = 'center'
          />
        </View>
        <View style = {style.input}>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'next'
            textContentType = 'name'
            placeholder = 'Last Name'
            autoCompleteType = 'name'
            blurOnSubmit = {true}
            textAlign = 'center'
          />
        </View>
        <View style = {style.input}>
          <TextInput
            keyboardType = 'email-address'
            returnKeyType = 'next'
            textContentType = 'emailAddress'
            placeholder = 'email@example.com'
            autoCompleteType = 'email'
            blurOnSubmit = {true}
            textAlign = 'center'
          />
        </View>
        <View style = {style.input}>
          <TextInput
            keyboardType = 'number-pad'
            returnKeyType = 'next'
            textContentType = 'telephoneNumber'
            placeholder = '08012345678'
            autoCompleteType = 'tel'
            blurOnSubmit = {true}
            textAlign = 'center'
          />
        </View>
        <View style = {style.input}>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'next'
            textContentType = 'fullStreetAddress'
            placeholder = 'Your Address'
            autoCompleteType = 'street-address'
            blurOnSubmit = {true}
            textAlign = 'center'
          />
        </View>
        <View style = {style.input} >
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'done'
            textContentType = 'password'
            autoCompleteType = 'password'
            placeholder = 'Your Password'
            blurOnSubmit = {true}
            secureTextEntry = {true}
            textAlign = 'center'
          />
        </View>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('OTP')}>
          <Text>Register</Text>
        </TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity onPress = { () => this.props.navigation.navigate('SignIn')}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
    )
  }
}