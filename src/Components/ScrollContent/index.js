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
            <View style = {style.content}>
                <ImageBackground source = {this.props.image} style = {style.image} >
                    <Text style = {style.firstText}>{this.props.firstText}</Text>
                    <Text style = {style.secondText}>{this.props.secondText}</Text>
                    <Text style = {style.thirdText}>{this.props.thirdText}</Text>
                    <Text style = {style.fourthText}>{this.props.fourthText}</Text>
                    <Text style = {style.fifthText}>{this.props.fifthText}</Text>
                </ImageBackground>
            </View>
        )
    }
}