import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);
        this.state= {};
    }
    
    
    render() {
        const {route} = this.props
        return(
            <View>
                <TouchableOpacity onPress = {() => console.log('this.props.navigation.navigate(route)')}>
                    <View>
                        <SvgUri
                        uri = {this.props.svg ? this.props.svg : ''}
                        />
                    </View>
                    {this.props.icon ?
                        <Icon
                        name = {this.props.icon.name} //will take value from the parent component
                        />
                        :
                        console.log('icon is not set')
                    }

                    <Text>{this.props.text}</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}