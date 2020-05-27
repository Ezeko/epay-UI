import React, { Component } from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import style from './style';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            uri : require('../../../assets/EPayLogointro.mp4')
        }
    }


    render () {
        console.log('uri' + this.state.uri)
        return (
            <View>
                <Video source = {{uri: "../../../assets/EPayLogointro.mp4"}}
                onError = {(error) => console.log(error)}
                style = {style.video}
                resizeMode  = 'cover'
                ref = {(ref) => this.player = ref}
                />
            </View>
        )
    }
}