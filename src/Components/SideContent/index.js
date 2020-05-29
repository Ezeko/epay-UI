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
        const route = this.props.route
        console.log(this.props.navigation)
        return(
            <View style = {style.sideBar}
            >
                <TouchableOpacity onPress = {() => this.props.route? this.props.navigation.navigate(route) : console.log(`${this.props.text} pressed`)} 
                style = {style.container}
                >
                    <View style = {style.icon}>
                        {this.props.icon ?
                            <Icon
                            style = {{backgroundColor: 'coral'}}
                            name = {this.props.icon.name} //will take value from the parent component
                            />
                            :
                            <Image source = {this.props.img} style = {style.image} />
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