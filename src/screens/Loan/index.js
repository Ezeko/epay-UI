import React, { Component } from 'react';
import {View, Text} from 'react-native';
import style from './style';

export default class Loan extends Component {
    constructor (props){
        super (props);
        this.state = {};
        this.params = this.props.navigation.state.params
    }

    handleSubmission () {}

    render(){
        return(
            <View>
                <Text>Loan Screen</Text>
            </View>
        )
    }
}