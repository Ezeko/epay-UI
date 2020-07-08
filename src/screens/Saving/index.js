import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import style from './style';
import {GlobalVariables} from '../../../Global';

export default class Saving extends Component {
    constructor (props){
      super(props);
      this.state = {
          amount: 50000,
          savings: 0,
          saving_amount: 0,
          user_id: 51,
          isLoading: false,
      };
      this.params = this.props.navigation.state.params
    }
    
    componentDidMount () {
      //get savings and save in savings history
      fetch(GlobalVariables.apiURL+ '/saving/'+this.state.user_id)
      .then((response) => response.text())
      .then((rep) => {
        let data = JSON.parse(rep)
        console.log('savings response: ' + rep)
      })
      .catch((error)=> console.log('savings error: ' + error))

    }
    handleSubmission () {
  
      this.setState({
        isLoading: true
      })
      let saving_amount = this.state.saving_amount.replace(/^\s+|\s+$/g, "");

      fetch(GlobalVariables.apiURL + '/saving',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: 'user_id=' + this.state.user_id
                + '&amount=' + saving_amount,
        }
      )
      .then((res)=> res.text())
      .then((rep) =>{
        var data = JSON.parse(rep)
        if (data.response === 'Ok'){
          this.setState({isLoading: false})
          Alert.alert(
            'Success!',
            data.Message,
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

        }else{
          Alert.alert(
            'Oops!',
            'Error occur \n'+
            data.Message,
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
      })
      .catch((error) => console.log('saving: ' + error))

  
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
                textContentType = 'none'
                placeholder = 'Input Amount to Save'
                maxLength = {8}
                textAlign = 'center'
                onChangeText = {(saving_amount) => this.setState({saving_amount})}
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