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
                    img = {require('../../../assets/logo/HomeBarIcon14.png')}
                    />

                    <SideBar 
                    text = 'Transfer Funds'
                    img = {require('../../../assets/logo/transferfunds.png')}
                    />

                    <SideBar 
                    text = 'Card Requests'
                    img = {require('../../../assets/logo/CardRequest.png')}
                    />

                    <SideBar 
                    text = 'Cards'
                    img = {require('../../../assets/logo/Card.png')}

                    />

                    <SideBar 
                    text = 'Lifestyle & Travel'
                    img = {require('../../../assets/logo/LifestyleAndTravel.png')}
                    />

                    <SideBar 
                    text = 'Self Service'
                    img = {require('../../../assets/logo/SelfService.png')}
                    />

                    <SideBar 
                    text = 'Loans'
                    img = {require('../../../assets/logo/Loans.png')}
                    />

                    <SideBar 
                    text = 'Notifications'
                    img = {require('../../../assets/logo/Notifications.png')}
                    />

                    <SideBar 
                    text = 'My profile'
                    img = {require('../../../assets/logo/MyProfile.png')}
                    />
                    
                    <SideBar 
                    text = 'Log out'
                    image = {require('../../../assets/logo/logOut.png')}
                    />

                    <SideBar 
                    text = 'Bill Payment'
                    img = {require('../../../assets/logo/billspayment.png')}
                    />

                    <SideBar 
                    text = 'Airtime'
                    img = {require('../../../assets/logo/airtime.png')}
                    />


                    <SideBar 
                    text = 'Savings'
                    img = {require('../../../assets/logo/Savings.png')}
                    />

                    <SideBar 
                    text = 'Investment'
                    img = {require('../../../assets/logo/investment.png')}
                    />
            
                    <SideBar 
                    text = 'Cryptocurrency'
                    img = {require('../../../assets/logo/cryptocurrency.png')}
                    />

                </View>

            </View>
        )
    }
}