import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignIn extends Component {
    constructor (props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
        }
    }

handleSubmission () {

    //show spinner
    this.setState({isLoading: true})

    //strip input of encoded characters
    let email = this.state.email.replace(/^\s+|\s+$/g, "");
    let password = this.state.password.replace(/^\s+|\s+$/g, "");
    
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

    else if (!checkEmail){
        this.setState({isLoading: false}); //quit loading
        Alert.alert(
            'Oops!',
            'Email format not valid',
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

    else if (password.length < 1) {
        this.setState({isLoading: false}); //quit loading
        Alert.alert(
            'Oops!',
            'Password cannot be empty',
            [
                {
                    text: 'OK',
                    style: 'cancel'
                }
            ]
        )
    }
    else {
        console.log('signed in');
        this.setState({isLoading: false}); //quit loading 
        this.props.navigation.navigate('Home'); //navigate to home screen
    }
    
}

    render () {
        return(
            <View style = {style.container}>
               <StatusBar barStyle = 'dark-content' />
               <Spinner visible = {this.state.isLoading}
                textContent = {''} 
                />
                <KeyboardAwareScrollView style = {style.wrapper}>
                    <Text style = {style.top}>Welcome Back</Text>
                    <View style = {style.input}>
                        <TextInput
                          keyboardType = 'email-address'
                          placeholder = 'email@example.com'
                          textAlign = 'center'
                          returnKeyType = 'next'
                          autoCompleteType = 'email'
                          onSubmitEditing = {()=> this.password.focus()}
                          onChangeText = {(email) => this.setState({email})}
                          style = {{fontFamily: 'avertalight'}}
                        />
                    </View>

                    <View style={style.input}>
                        <TextInput
                          keyboardType = 'default'
                          placeholder = 'password'
                          textAlign = 'center'
                          returnKeyType = 'done'
                          autoCompleteType = 'password'
                          onSubmitEditing = {()=> this.handleSubmission()}
                          onChangeText = {(password) => this.setState({password})}
                          secureTextEntry = {true}
                          ref = {(input) => this.password = input}
                          style = {{fontFamily: 'avertalight'}}
                        />
                    </View>
                    <TouchableOpacity 
                      style = {style.button} 
                      onPress = {() => this.handleSubmission()}
                    >
                        <Text style = {style.text}>Submit</Text>
                    </TouchableOpacity>

                    <View style = {style.signIn}>
                      <Text style = {{fontFamily: 'uber-l', fontSize: 13, marginTop: 25}}>No Account Yet? Register</Text>
                      
                      <TouchableOpacity 
                      onPress = {()=> this.props.navigation.navigate('SignUp')}
                      >
                        <Text style = {{fontFamily: 'uber-l', fontSize: 16, textAlign: 'center',
                        color:'coral'}}> Here</Text>
                      </TouchableOpacity>

                    </View>
                </KeyboardAwareScrollView>
                
            </View>
        )
    }
}