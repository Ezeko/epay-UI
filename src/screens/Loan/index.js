import React, { Component } from 'react';
import {View, Text} from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {GlobalVariables} from '../../../Global';

export default class Loan extends Component {
    constructor (props){
        super (props);
        this.state = {
            showButton: false,
            user_id: 51,
            loan: 0,
        };
        this.params = this.props.navigation.state.params
    }
    componentDidMount () {
        fetch(GlobalVariables.apiURL + '/loan/' + this.state.user_id )
        .then((response) => response.text())
        .then((res) =>{
            console.log(res)

            var data = JSON.parse(res)
            if (data.response == 'Ok'){
                this.setState({loan: data.loan, showButton: true})
            }
        })
        .catch((error)=> console.log('loan error: ' + error))
    }
    handleSubmission () {
        fetch(GlobalVariables.apiURL + '/saving',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          }),
          body: 'user_id=' + this.state.user_id
                + '&amount=' + this.state.loan,
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
            <View style={style.container}>
                <View style={style.wrapper}>
                    {
                    this.state.showButton ?
                    <View >
                        <Text style={style.text}>Loan AMOUNT: {this.state.loan}</Text>
                        <TouchableOpacity style={style.button} onPress = {()=> this.handleSubmission()} >
                            <Text style={style.save}>GET LOAN</Text>
                        </TouchableOpacity>
                    </View>
                    : <Text style={style.text}> Not Eligible for loan</Text>
                    }
                </View>
                
                
              
            </View>
        )
    }
}