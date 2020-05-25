import React, { Component } from 'react';
import { Text, View } from 'react-native';
import style from './style';
import Side from '../../Components/SideBar/index';


export default class Home2 extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isAgent: true,
        }
    }

    render () {
        return (
            <View>
                <Side isAgent = {this.state.isAgent}/>
            </View>
        )
    }
}