import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import style from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';


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
      isLoading: false,
    };
  }

  componentDidMount () {}

  registerUser () {

    //show spinner
    this.setState({isLoading: true})

    //strip input of encoded characters
    let email = this.state.email.replace(/^\s+|\s+$/g, "");
    let password = this.state.password.replace(/^\s+|\s+$/g, "");
    let firstname = this.state.firstname.replace(/^\s+|\s+$/g, "");
    let lastName = this.state.lastName.replace(/^\s+|\s+$/g, "");
    let phone = this.state.phone.replace(/^\s+|\s+$/g, "");
    let address = this.state.address.replace(/^\s+|\s+$/g, "");
    
    //regex to check that email contains '@' and . and two to fine characters after .

    let checkEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);


    if (email.length < 1){
        this.setState({isLoading: false}); //quit loading
        Alert.alert(
            'Oops!',
            'Email cannot be empty',
            [
                {
                  text: 'OK',
                  style: 'cancel'
                }
              ],
              {
                cancelable: true
              }
         );
    }

    else if (firstname.length < 1 ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Firstname cannot be empty',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (lastName.length < 1 ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Lastname cannot be empty',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (!checkEmail ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Email format is not valid! Ensure to add @ and .',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (phone.length < 1 ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Phone Number field is empty',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (phone.length !== 11   ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Phone Numebr Length should be 11 digits',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (address.length < 1 ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Address field cannot cannot be empty',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }

    else if (password.length < 1 ){
      this.setState({isLoading: false}); //quit loading
      Alert.alert(
          'Oops!',
          'Password field cannot be empty',
          [
              {
                text: 'OK',
                style: 'cancel'
              }
            ],
            {
              cancelable: true
            }
       )
    }


    else{
    this.setState({isLoading: false})
    this.props.navigation.navigate('OTP', {
      firstname: firstname,
    })
    }
    
  }

  render() {
    console.log(this.state)
    return(
      <View style = {style.container} >
      <StatusBar barStyle = 'dark-content' />
      
      <Spinner visible = {this.state.isLoading}
      textContent = {''}
      />

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
            style = {{fontFamily: 'avertalight'}}
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
            style = {{fontFamily: 'avertalight'}}
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
            style = {{fontFamily: 'avertalight'}}
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
            maxLength = {11}
            onSubmitEditing = {() => this.agentCode.focus()}
            ref = {(input) => this.telephone = input}
            onChangeText = {(phone) => this.setState({phone})}
            style = {{fontFamily: 'avertalight'}}
          />
        </View>

        <View style = {style.input}>
          <TextInput
            keyboardType = 'number-pad'
            returnKeyType = 'next'
            textContentType = 'oneTimeCode'
            placeholder = 'Agent Code'
            blurOnSubmit = {true}
            textAlign = 'center'
            maxLength = {10}
            onSubmitEditing = {() => this.address.focus()}
            ref = {(input) => this.agentCode = input}
            onChangeText = {(phone) => this.setState({phone})}
            style = {{fontFamily: 'avertalight'}}
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
            style = {{fontFamily: 'avertalight'}}
          />
        </View>


        <View style = {style.input} >
          <TextInput
            keyboardType = 'default'
            returnKeyType = 'send'
            textContentType = 'password'
            autoCompleteType = 'password'
            placeholder = 'Your Password'
            blurOnSubmit = {true}
            secureTextEntry = {true}
            textAlign = 'center'
            onSubmitEditing = {() => this.registerUser()}
            ref = {(input) => this.password = input}
            onChangeText = {(password) => this.setState({password})}
            style = {{fontFamily: 'avertalight', fontStyle: 'normal',}}
          />
        </View>

      </KeyboardAwareScrollView>

      <View style = {style.foot}>

        <TouchableOpacity onPress = {() => this.registerUser()} style = {style.reg}>
          <View style ={style.regView} >
            <Text style={style.reg}>Create Account</Text>
          </View>
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