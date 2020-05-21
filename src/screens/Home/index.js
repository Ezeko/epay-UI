import React, {Component} from 'react';
import { 
    Text, 
    View,
    AsyncStorage, 
    ImageBackground, 
    StatusBar,
} from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
                        <Text style = {style.welcome}>Welcome to Epay</Text>
                    </View>

                    <View style = {style.foot}>
                        <TouchableOpacity style = {style.categoryView}>
                            <Text style = {style.category}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {style.about}>About Epay</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>

            </View>
        )
    }
}