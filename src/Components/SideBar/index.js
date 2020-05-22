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
                    IconName = 'menu'
                    />

                    <SideBar 
                    text = 'Transfer Funds'
                    IconName = 'wallet'
                    />

                    <SideBar 
                    text = 'Card Requests'
                    IconName = 'menu'
                    />

                    <SideBar 
                    text = 'Cards'
                    IconName = 'wallet'
                    />
                    
                    <SideBar 
                    text = 'Lifestyle & Travel'
                    IconName = 'menu'
                    />

                    <SideBar 
                    text = 'Self Service'
                    IconName = 'wallet'
                    />

                    <SideBar 
                    text = 'Loans'
                    IconName = 'menu'
                    />

                    <SideBar 
                    text = 'Notifications'
                    IconName = 'wallet'
                    />

                    <SideBar 
                    text = 'My profile'
                    IconName = 'menu'
                    />
                    
                    <SideBar 
                    text = 'Log out'
                    IconName = 'wallet'
                    route = ''
                    />

                    <SideBar 
                    text = 'Bill Payment'
                    IconName = 'wallet'
                    />

                    <SideBar 
                    text = 'Airtime'
                    IconName = 'wallet'
                    />


                    <SideBar 
                    text = 'Savings'
                    IconName = 'wallet'
                    route = ''
                    />

                    <SideBar 
                    text = 'Investment'
                    IconName = 'wallet'
                    route = ''
                    />
            
                    <SideBar 
                    text = 'Cryptocurrency'
                    IconName = 'wallet'
                    route = ''
                    />

                </View>

            </View>
        )
    }
}