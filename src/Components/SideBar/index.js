import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import SideBar from '../SideContent/index';

export default class Sidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <View>
                <View>
                    <Image source = {require('../../../assets/images/ePayLogo.png')} />
                    <Icon
                    type = 'ionicon'
                    name='chevron-back-outline'/>
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
                    svg = '../../../assets/images/HomeBarIcon14.svg'
                    />

                    <SideBar 
                    text = 'Transfer Funds'
                    svg = '../../../assets/images/transferfunds.svg'
                    />

                    <SideBar 
                    text = 'Card Requests'
                    svg = '../../../assets/images/CardRequest.svg'
                    />

                    <SideBar 
                    text = 'Cards'
                    svg = '../../../assets/images/Cards.svg'

                    />

                    <SideBar 
                    text = 'Lifestyle & Travel'
                    svg = '../../../assets/images/LifestyleAndTravel.svg'
                    />

                    <SideBar 
                    text = 'Self Service'
                    svg = '../../../assets/images/SelfService.svg'
                    />

                    <SideBar 
                    text = 'Loans'
                    svg = '../../../assets/images/Loans.svg'
                    />

                    <SideBar 
                    text = 'Notifications'
                    svg = '../../../assets/images/Notifications.svg'
                    />

                    <SideBar 
                    text = 'My profile'
                    svg = '../../../assets/images/MyProfile.svg'
                    />
                    
                    <SideBar 
                    text = 'Log out'
                    svg = '../../../assets/images/logOut.svg'
                    />

                    <SideBar 
                    text = 'Bill Payment'
                    svg = '../../../assets/images/billspayment.svg'
                    />

                    <SideBar 
                    text = 'Airtime'
                    svg = '../../../assets/images/airtime.svg'
                    />


                    <SideBar 
                    text = 'Savings'
                    svg = '../../../assets/images/Savings.svg'
                    />

                    <SideBar 
                    text = 'Investment'
                    svg = '../../../assets/images/investment.svg'
                    />
            
                    <SideBar 
                    text = 'Cryptocurrency'
                    svg = '../../../assets/images/cryptocurrency.svg'
                    />

                </View>

            </View>
        )
    }
}