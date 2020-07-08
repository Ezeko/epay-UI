import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';

export default class Saving extends Component {
    constructor (props){
      super(props);
      this.state = {
          amount: 50000,
          savings: 0,
          isLoading: false,
      };
      this.params = this.props.navigation.state.params
    }
    
    componentDidMount () {
      //get savings and save in savings
      
    }
    handleSubmission () {
  
      this.setState({
        isLoading: true
      })
  
    }
  
    render(){
  
      return(
        <View style = {style.container}>
  
          <View style = {style.wrapper} >
  
            <Text style = {style.text}>You have ₦{this.state.amount}, </Text>
            <Text style = {{fontFamily: 'avertalight',fontStyle: 'normal',}}>Save Funds Here</Text>

            <KeyboardAwareScrollView>
              <TextInput
                returnKeyType = 'next'
                keyboardType = 'number-pad'
                textContentType = 'oneTimeCode'
                placeholder = 'Input Amount to Save'
                maxLength = {8}
                textAlign = 'center'
                //onChangeText = {/*(OTP) => this.setState({OTP})*/}
                onSubmitEditing = { ()=> this.handleSubmission()}
                style = {style.input}
              />
            <TouchableOpacity 
                style = {style.button} 
                onPress = {() => this.handleSubmission()}
            >
                <Text style = {style.save}>Save</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
  
        </View>
      );
    }
  }