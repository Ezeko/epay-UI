import React, { Component } from 'react';
import {Text, View, ScrollView, StatusBar} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import style from './style'
import { Icon } from 'native-base';
import color from '../../Config/color';
import ScrollContent from '../../Components/ScrollContent'


export default class Lifestyle extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loading: true,
        }
    }


    render() {
        return (
            <View>
                <StatusBar barStyle = 'dark-content' />
                <Spinner
                visible = {this.state.loading}
                textContent = 'Loading'
                />


                <View style = {style.head} >
                    <View style = {style.iconHead}>
                        <Icon name = 'menu'  style = {style.icon}
                        color = {color.ePayOrange}
                        />
                    </View>
                    <View>
                        <Image source = {require('../../../assets/images/homeImage.png')}
                        style = {style.image}
                        />
                    </View>
                </View>

                <View style= {style.main}>
                    <View>
                        <View>
                            <Image source = {require('../../../assets/logo/lifestyle.png')} />
                            <Text style = {style.text}>Lifestyle</Text>
                        </View>
                        <Text>Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet,.</Text>
                    </View>
                    <View>
                        <ScrollView>
                            <ScrollContent />
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}