import React, { Component } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import style from './style';


export default class Content extends Component {
    constructor (props){
        super (props);
        this.state = {};
    }

    render (){
        return(
            <View>
                <ImageBackground source = {this.props.image} style = {style.image} >
                    <Text>{this.props.firstText}</Text>
                    <Text>{this.props.secondText}</Text>
                </ImageBackground>
            </View>
        )
    }
}