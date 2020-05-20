import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


export default class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  render() {
    return(
      <KeyboardAwareScrollView>
        <View>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'next'
            textContentType = 'name'
          />
        </View>
        <View>
          <TextInput
            keyboardType = 'email-address'
            returnKeyType = 'next'
            textContentType = 'emailAddress'
          />
        </View>
        <View>
          <TextInput
            keyboardType = 'number-pad'
            returnKeyType = 'next'
            textContentType = 'telephoneNumber'
          />
        </View>
        <View>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'next'
            textContentType = 'fullStreetAddress'
          />
        </View>
        <View>
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'done'
            textContentType = 'password'
          />
        </View>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    )
  }
}