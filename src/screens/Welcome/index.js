import React, { Component } from 'react';
import {View, AsyncStorage} from 'react-native';
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

    componentDidMount () {
        //check AsyncStorage if user has been used the app before

        AsyncStorage.getItem('isFirstTimer').then((isFirstTimer)=> isFirstTimer ? this.setState({isFirstTimer}): this.setState({isFirstTimer: true}))
        .catch((error) => {
        console.log('AsyncStorage Video error: ' + error);
        })
    }

    endAction (){
        let firstTimer = () => (this.props.navigation.replace('Slider'));
        let carryOutTask = () => {
            //if its first timer navigate to slider screen
            this.state.isFirstTimer ? 
            firstTimer()
            :
            this.props.navigation.replace('SignIn'); //else navigate to signin screen

        };

        setTimeout( carryOutTask, 5000);

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
                onEnd = { this.endAction()}
                
                />
            </View>
        )
    }
}