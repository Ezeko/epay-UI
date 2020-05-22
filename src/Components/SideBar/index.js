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
                    svg = 'HomeBarIcon14.svg'
                    />

                    <SideBar 
                    text = 'Transfer Funds'
                    svg = 'transferfunds.svg'
                    />

                    <SideBar 
                    text = 'Card Requests'
                    svg = 'CardRequest.svg'
                    />

                    <SideBar 
                    text = 'Cards'
                    svg = 'Cards.svg'

                    />

                    <SideBar 
                    text = 'Lifestyle & Travel'
                    svg = 'LifestyleAndTravel.svg'
                    />

                    <SideBar 
                    text = 'Self Service'
                    svg = 'SelfService.svg'
                    />

                    <SideBar 
                    text = 'Loans'
                    svg = 'Loans.svg'
                    />

                    <SideBar 
                    text = 'Notifications'
                    svg = 'Notifications.svg'
                    />

                    <SideBar 
                    text = 'My profile'
                    svg = 'MyProfile.svg'
                    />
                    
                    <SideBar 
                    text = 'Log out'
                    svg = 'logOut.svg'
                    route = ''
                    />

                    <SideBar 
                    text = 'Bill Payment'
                    svg = 'billspayment.svg'
                    />

                    <SideBar 
                    text = 'Airtime'
                    svg = 'airtime.svg'
                    />


                    <SideBar 
                    text = 'Savings'
                    svg = 'Savings.svg'
                    route = ''
                    />

                    <SideBar 
                    text = 'Investment'
                    svg = 'investment.svg'
                    route = ''
                    />
            
                    <SideBar 
                    text = 'Cryptocurrency'
                    icon = {{name: 'logo-bitcoin', type: 'ionicon'}}
                    route = ''
                    />

                </View>

            </View>
        )
    }
}