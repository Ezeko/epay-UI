import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import SideBar from '../SideContent/index';
import style from './style'

export default class Sidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <View>
                <View style = {style.head}>
                    <Image source = {require('../../../assets/images/ePayLogo.png')} />
                    <Icon
                    type = 'ionicon'
                    name='ios-arrow-dropleft'/>

                </View>

                {
                //vertical line in between
                }
                <View></View>

                {
                    //side menu detailed contents
                }
                <View>
                    <SideBar 
                    text = 'Home'
                    icon = {{name: 'home', type: 'simple-line-icon'}}
                    />

                    <SideBar
                    text = 'Account'
                    svg = {require('../../../assets/images/HomeBarIcon14.svg')}
                    />

                    <SideBar 
                    text = 'Transfer Funds'
                    svg = {require('../../../assets/images/transferfunds.svg')}
                    />

                    <SideBar 
                    text = 'Card Requests'
                    svg = {require('../../../assets/images/CardRequest.svg')}
                    />

                    <SideBar 
                    text = 'Cards'
                    svg = {require('../../../assets/images/Card.svg')}

                    />

                    <SideBar 
                    text = 'Lifestyle & Travel'
                    svg = {require('../../../assets/images/LifestyleAndTravel.svg')}
                    />

                    <SideBar 
                    text = 'Self Service'
                    svg = {require('../../../assets/images/SelfService.svg')}
                    />

                    <SideBar 
                    text = 'Loans'
                    svg = {require('../../../assets/images/Loans.svg')}
                    />

                    <SideBar 
                    text = 'Notifications'
                    svg = {require('../../../assets/images/Notifications.svg')}
                    />

                    <SideBar 
                    text = 'My profile'
                    svg = {require('../../../assets/images/MyProfile.svg')}
                    />
                    
                    <SideBar 
                    text = 'Log out'
                    svg = {require('../../../assets/images/logOut.svg')}
                    />

                    <SideBar 
                    text = 'Bill Payment'
                    svg = {require('../../../assets/images/billspayment.svg')}
                    />

                    <SideBar 
                    text = 'Airtime'
                    svg = {require('../../../assets/images/airtime.svg')}
                    />


                    <SideBar 
                    text = 'Savings'
                    svg = {require('../../../assets/images/Savings.svg')}
                    />

                    <SideBar 
                    text = 'Investment'
                    svg = {require('../../../assets/images/investment.svg')}
                    />
            
                    <SideBar 
                    text = 'Cryptocurrency'
                    svg = {require('../../../assets/images/cryptocurrency.svg')}
                    />

                </View>

            </View>
        )
    }
}