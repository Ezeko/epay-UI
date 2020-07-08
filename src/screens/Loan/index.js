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
    handleSubmission () {}

    render(){
        return(
            <View>
                
                {
                this.state.showButton ?
                <View>
                    <Text>Loan AMOUNT: {this.state.loan}</Text>
                    <TouchableOpacity onPress = {()=> this.handleSubmission()} >
                        <Text>GET LOAN</Text>
                    </TouchableOpacity>
                </View>
                : <Text> Not Eligible to take loan</Text>
                }
              
            </View>
        )
    }
}