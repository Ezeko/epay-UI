import React, { Component } from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

export default class Welcome extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }


    render () {
        return (
            <View>
                <Video source = {require('../../../assets/EPayLogointro')} />
            </View>
        )
    }
}