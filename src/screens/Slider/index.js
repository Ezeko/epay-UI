import React, {Component} from 'react';
import {
    Text,
    View,
    Dimension,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default class Slider extends Component{
    constructor (props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <Swiper style={styles.wrapper} activeDotColor='yellow'>
                <View style= {styles.firstView}>
                    <Image source = {require('../../../assets/images/image1.png')} />
                    <Text> First  slide</Text>
                </View>
                <View>
                <Image source = {require('../../../assets/images/Housing.png')} />
                    <Text> Second  slide</Text>
                </View>
                <View>
                <Image source = {require('../../../assets/images/education.png')} />
                    <Text> Third  slide</Text>
                </View>
            </Swiper>
        )
    }
}