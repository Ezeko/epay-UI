import React, { Component } from 'react';
import {View, ImageBackground, Text } from 'react-native';
import style from './style';


export default class Card extends Component {
    constructor (props) {
        super (props);
        this.state = {}
    }


    render () {
        return(
            <View style = {style.wrapper}>
                <Text>Card Page</Text>
            </View>
        )
    }
}