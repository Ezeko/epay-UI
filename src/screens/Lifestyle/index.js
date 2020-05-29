import React, { Component } from 'react';
import {Text, View, ScrollView, StatusBar, Image, TextInput} from 'react-native';
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
            search: '',
        }
    }


    componentDidMount () {
        this.setState({loading: false})
    }

    render() {
        return (
            <View style = {style.wrapper}>
                <StatusBar barStyle = 'dark-content' />
                <Spinner
                visible = {this.state.loading}
                textContent = 'Loading'
                />


                <View style = {style.head} >
                    <View style = {style.iconHead}>
                        <Icon name = 'menu'
                        color = '#ff7f50'
                        />
                        <View style = {style.inputIcon}>
                            <Icon name='search' 
                            style = {{marginHorizontal: 7}}/>
                            <TextInput
                            placeholder='SEARCH'
                            keyboardType = 'default'
                            returnKeyType = 'send'
                            onSubmitEditing = {()=> this.handleSubmission()}
                            onChangeText = {(search) => this.setState({search})}
                            style = {{fontFamily: 'avertalight', flex: 1}}

                            />
                        </View>
                    </View>
                    <View>
                        <Image source = {require('../../../assets/images/ePayLogo.png')}
                        style = {style.image}
                        />
                    </View>
                </View>

                <View style= {style.main}>
                    <View style = {style.firstMainPart}>
                        <View style = {style.lifestyle}>
                            <Image source = {require('../../../assets/logo/LifestyleAndTravel.png')} />
                            <Text style = {style.text}>Lifestyle</Text>
                        </View>
                        <Text style = {{fontFamily: 'avertalight', marginHorizontal: 15}}>Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit amet,.</Text>
                    </View>
                    <View style = {style.secondMainPart} >
                        <ScrollView style = {{flex: 1}}>
                            <ScrollContent
                            image = {require('../../../assets/images/educationFrame.png')}
                            firstText = '02'
                            secondText = 'NEW LOG'
                            thirdText = 'Education'
                            fourthText = "Get student's loan to cover for your tution anywhere in Nigeria"
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/housingIcon.png')}
                            firstText = '03'
                            secondText = 'NEW LOG'
                            thirdText = 'Housing'
                            fourthText = {"Let us build for you and your family an afford luxurious house with up to 35 years payment plan."}
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/healthcareIcon.png')}
                            firstText = '04'
                            secondText = 'NEW LOG'
                            thirdText = 'Health Care'
                            fourthText = "You have access to personal Doctors from India, America, United Kingdom and Nigeria that will help take good care of your health"
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/Jobs.png')}
                            firstText = '05'
                            secondText = 'NEW LOG'
                            thirdText = 'Jobs'
                            fourthText = "Get instant jobs from millions of customers that need your services"
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/Movies.png')}
                            firstText = '06'
                            secondText = 'NEW LOG'
                            thirdText = 'Movies'
                            fourthText = "Watch over 2000 movies from the comfort of your phone"
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/GetARide.png')}
                            firstText = '07'
                            secondText = 'NEW LOG'
                            thirdText = 'Get A ride'
                            fourthText = "We offer you self ride on bikes, cars and buses or you hire experience riders to take you to your destinations"
                            />

                            <ScrollContent
                            image = {require('../../../assets/images/courier.png')}
                            firstText = '08'
                            secondText = 'NEW LOG'
                            thirdText = 'Courier'
                            fourthText = "Get instant jobs from millions customers that need your services"
                            />

                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}