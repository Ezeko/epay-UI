import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);
        
    }
    
    
    render() {
        const {route} = this.props.route
        return(
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate(route)}>
                    <View>
                        <SvgUri
                        uri = {require(`../../../assets/images/${this.props.svg}`)}
                        />
                    </View>
                    <Icon
                    type = {this.props.icon.type}
                    name = {this.props.icon.name} //will take value from the parent component
                    />

                    <Text>{this.props.text}</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}