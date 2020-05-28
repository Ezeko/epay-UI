import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Lifestyle extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loading: true,
        }
    }


    render() {
        return (
            <View>
                <Spinner
                visible = {this.state.loading}
                textContent = 'Loading'
                />
            </View>
        )
    }
}