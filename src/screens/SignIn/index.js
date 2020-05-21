import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';

export default class SignIn extends Component {
    constructor (props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

handleSubmission () {
    console.log('signed in')
    this.props.navigation.navigate('Home');
}

    render () {
        return(
            <View style = {style.container}>
               <StatusBar barStyle = 'dark-content' />
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
                          style = {{fontFamily: 'uber'}}
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
                          style = {{fontFamily: 'uber'}}
                        />
                    </View>
                    <TouchableOpacity 
                      style = {style.button} 
                      onPress = {() => this.handleSubmission()}
                    >
                        <Text style = {style.text}>Submit</Text>
                    </TouchableOpacity>
                    <View style = {style.signIn}>
                      <Text style = {{fontFamily: 'uber', fontSize: 13, marginTop: 25}}>No Account Yet? Register</Text>
                      <TouchableOpacity 
                      onPress = {()=> this.props.navigation.navigate('SignUp')}
                      >
                        <Text style = {{fontFamily: 'uber', fontSize: 16, textAlign: 'center',
                        color:'white'}}> Here</Text>
                      </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
                
            </View>
        )
    }
}