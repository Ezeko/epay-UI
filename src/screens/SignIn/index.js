import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Button
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


    render () {
        return(
            <View style = {style.container}>
                <KeyboardAwareScrollView>
                    <View>
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

                    <View>
                        <TextInput
                          keyboardType = 'default'
                          placeholder = 'password'
                          textAlign = 'center'
                          returnKeyType = 'next'
                          autoCompleteType = 'password'
                          onSubmitEditing = {()=> this.handleSubmission}
                          onChangeText = {(password) => this.setState({password})}
                          secureTextEntry = {true}
                          ref = {(input) => this.password = input}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}