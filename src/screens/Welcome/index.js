import React, { Component } from 'react';
import {View, Text} from 'react-native';
import * as Video  from 'expo-av';
import style from './style';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            uri : require('../../../assets/video/EPayLogointro.mp4')
        }
    }


    render () {
        console.log('uri' + this.state.uri)
        return (
            <View>
                <Text>Thidi</Text>
                {console.log('video')}
                <Video source = {{uri: require('../../../assets/video/EPayLogointro.mp4')}}
                onError = {(error) => console.log(error)}
                style = {style.video}
                resizeMode  = 'cover'
                ref = {(ref) => this.player = ref}
                />
            </View>
        )
    }
}