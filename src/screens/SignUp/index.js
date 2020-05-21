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
    this.state = {
      firstname: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
    };
  }

  componentDidMount () {}

  render() {
    console.log(this.state)
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
            onChangeText = {(firstname) => this.setState({firstname})}
            onSubmitEditing = {() => this.lastName.focus()}
            style = {{fontFamily: 'uber'}}
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
            ref = {(input)=> this.lastName = input}
            textAlign = 'center'
            onSubmitEditing = {() => this.email.focus()}
            onChangeText = {(lastName) => this.setState({lastName})}
            style = {{fontFamily: 'uber'}}
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
            onSubmitEditing = {() => this.telephone.focus()}
            onChangeText = {(email) => this.setState({email})}
            ref = {(input) => this.email = input}
            style = {{fontFamily: 'uber'}}
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
            onSubmitEditing = {() => this.address.focus()}
            ref = {(input) => this.telephone = input}
            onChangeText = {(phone) => this.setState({phone})}
            style = {{fontFamily: 'uber'}}
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
            onSubmitEditing = {() => this.password.focus()}
            ref = {(input) => this.address = input}
            onChangeText = {(address) => this.setState({address})}
            style = {{fontFamily: 'uber'}}
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
            onSubmitEditing = {() => this.props.navigation.navigate('OTP')}
            ref = {(input) => this.password = input}
            onChangeText = {(password) => this.setState({password})}
            style = {{fontFamily: 'uber'}}
          />
        </View>

      </KeyboardAwareScrollView>

      <View style = {style.foot}>

        <TouchableOpacity onPress = {() => this.props.navigation.navigate('OTP')} style = {style.reg}>
          <Text style={style.reg}>Create Account</Text>
        </TouchableOpacity>

        <View style = {style.signIn}>

          <Text style = {style.signInText}>Or Sign In</Text>

          <TouchableOpacity onPress = { () => this.props.navigation.navigate('SignIn')}>
            <Text style = {style.signInText2}>Here</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
    )
  }
}