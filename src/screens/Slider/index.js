import React, {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    StatusBar  
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Slider extends Component{
    constructor (props){
        super(props);
        this.state = {};
    }

    render(){

        const { navigation } = this.props;

        return(
            
            <Swiper activeDotColor='yellow'>
                <View style= {styles.firstView}>
                <StatusBar barStyle = 'light-content' />
                    <ImageBackground source ={require('../../../assets/images/image1.png')} style ={styles.firstView.image} >
                        <View style={styles.text}>
                            <Text style={styles.firstText}> Travel</Text>
                            <Text style={styles.secondText}> Travel the World with style and Comfort with ePay Travel</Text>
                        </View>
                        
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground source = {require('../../../assets/images/Housing.png')} style = {styles.firstView.image} >
                        <View style={styles.text}>
                            <Text style={styles.firstText}> Housing</Text>
                            <Text style={styles.secondText}> Affordable luxurious house</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.firstView}>
                    <ImageBackground source = {require('../../../assets/images/education.png')} 
                    style={styles.firstView.image} 
                    >
                        <View style={styles.text}>
                            <Text style={styles.firstText}> Education</Text>
                            <Text style={styles.secondText}> Get Student Loan Anywhere in Nigeria</Text>
                        </View>
                        <TouchableOpacity 
                         onPress =  {() => navigation.navigate('SignUp')}>
                            <Text style={styles.touchable}>Get Started</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            </Swiper>
        )
    }
}