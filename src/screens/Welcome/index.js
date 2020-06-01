import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Video }  from 'expo-av';
import style from './style';

export default class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            uri : require('../../../assets/video/EPaylogointroblack.mp4'),
            isFirstTimer: true,
        }
    }

    endAction (){
        //check AsyncStorage if user has been used the app before

        //if its first timer navigate to slider screen
        isFirstTimer ? this.props.navigation.navigate('Slider'):
        this.props.navigation.navigate('SignIn') //else navigate to signin screen
    }

    _handleVideoRef = component => {
        const playbackObject = component;
        playbackObject.loadAsync(source, initialStatus = {}, downloadFirst = true)
      }

    render () {
        //console.log('uri' + this.state.uri)
        return (
            <View>
                <Video source = {this.state.uri}
                onError = {(error) => console.log(error)}
                style = {style.video}
                isMuted={false}
                shouldPlay
                resizeMode  = 'stretch'
                ref = {() => this._handleVideoRef}
                onEnd = { console.log('finished playing')}
                
                />
            </View>
        )
    }
}