import React, {Component} from 'react';
import { Text, View, AsyncStorage, ImageBackground, StatusBar, Image} from 'react-native';
import style from './style';


export default class Home extends Component {
    constructor(){
        super();
        this.state = {};
    }


    render () {
        return(
            <View style = {style.wrapper}>
                <StatusBar barStyle = 'dark-content' />
                <ImageBackground source = {require('../../../assets/images/homeImage.png')}
                style={style.image}
                >
                    <View>
                        <Text>This is the home screen</Text>
                    </View>
                </ImageBackground>

            </View>
        )
    }
}