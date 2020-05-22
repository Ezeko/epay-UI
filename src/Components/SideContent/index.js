import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);
        
    }
    
    
    render() {
        return(
            <View>
                <Icon
                type = 'ionicon'
                name = {this.props.IconName} 
                />

                <Text>{this.props.text}</Text>
            </View>
        )
    }
}