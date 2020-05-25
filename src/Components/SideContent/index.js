import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);

    }
    
    
    render() {
        return(
            <View >
                <TouchableOpacity onPress = {() => console.log('this.props.navigation.navigate(route)')} 
                style = {style.container}
                >
                    <View style = {style.icon}>
                        {this.props.icon ?
                            <Icon
                            style = {{backgroundColor: 'coral'}}
                            name = {this.props.icon.name} //will take value from the parent component
                            />
                            :
                            <Image source = {this.props.img} />
                        }
                    </View>

                    <View style = {style.textView}>
                    <Text style = {style.text}>{this.props.text}</Text>
                    </View>

                </TouchableOpacity>
               
            </View>
        )
    }
}