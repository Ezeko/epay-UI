import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Alert
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';


export default class OTP extends Component {
  constructor (props){
    super(props);
    this.state = {
        OTP: '',
        isLoading: false,
    };
    this.params = this.props.navigation.state.params
  }

  handleSubmission () {

    this.setState({
      isLoading: true
    })

    let OTP = this.state.OTP.replace(/^\s+|\s+$/g, "");
     if (OTP.length !== 8){
        this.setState({isLoading: false}); //quit loading
        Alert.alert(
          'Oops!',
          'OTP cannot be lesser than 8 digits',
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
        this.setState({isLoading: true})
        this.props.navigation.navigate('Home')
      }
  }

  render(){
    //let {firstname} = this.props.route.params
    //console.log(JSON.stringify(this.props.navigation.params.firstname))

    return(
      <View style = {style.container}>

        <View style = {style.wrapper} >

          <Text style = {style.text}>Welcome {this.params.firstname}, </Text>
          <Text style = {{fontFamily: 'avertalight',fontStyle: 'normal',}}>Kindly enter your 8 digits pin from your email...</Text>

          <KeyboardAwareScrollView>
            <TextInput
              returnKeyType = 'send'
              keyboardType = 'number-pad'
              textContentType = 'oneTimeCode'
              placeholder = '8 - Digits OTP'
              maxLength = {8}
              returnKeyType = 'send'
              textAlign = 'center'
              onChangeText = {(OTP) => this.setState({OTP})}
              onSubmitEditing = { ()=> this.handleSubmission()}
              style = {style.input}
            />

          </KeyboardAwareScrollView>
        </View>

      </View>
    );
  }
}