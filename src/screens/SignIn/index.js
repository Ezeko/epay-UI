import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    TouchableOpacity
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
               
                <KeyboardAwareScrollView style = {style.wrapper}>
                    <Text style = {style.top}>SIGN IN</Text>
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
                          returnKeyType = 'next'
                          autoCompleteType = 'password'
                          onSubmitEditing = {()=> this.handleSubmission}
                          onChangeText = {(password) => this.setState({password})}
                          secureTextEntry = {true}
                          ref = {(input) => this.password = input}
                          style = {{fontFamily: 'uber'}}
                        />
                    </View>
                    <TouchableOpacity style = {style.button}>
                        <Text style = {style.text}>Submit</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
                
            </View>
        )
    }
}