import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';


export default class SideBarContent extends Component {
    constructor (props) {
        super(props);
        this.state= {
            svg: '',
            name: '',
            icon: '',
            text: ''
        };
    }
    
    componentDidMount () {

        this.setState({svg: this.props.svg,} )
    }
    
    render() {
        console.log('svg' + this.state.svg)
        //const data = import * from (this.props.svg)
        console.log('dat ' + this.props.svg)
        return(
            <View>
                <TouchableOpacity onPress = {() => console.log('this.props.navigation.navigate(route)')}>
                    <View>
                        <SvgUri
                        source = {this.props.svg}
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