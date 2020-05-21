import React, {Component} from 'react';
import { Text, View, AsyncStorage, ImageBackground} from 'react-native';
import style from './style';


export default class Home extends Component {
    constructor(){
        super();
        this.state = {};
    }


    render () {
        return(
            <View barStyle = 'dark'>
                <Text>This is the home screen</Text>
            </View>
        )
    }
}