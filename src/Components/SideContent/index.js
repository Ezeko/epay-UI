import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);
        
    }
    
    
    render() {
        const {route} = this.props.route
        return(
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate(route)}>
                    <Icon
                    type = 'simple-line-icon'
                    name = {this.props.IconName} //will take value from the parent component
                    />

                    <Text>{this.props.text}</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}