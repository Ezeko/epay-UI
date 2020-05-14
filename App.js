import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation/index';
import { AppLoading,Asset, SplashScreen } from 'expo';
import * as Font from 'expo-font';


export default class App extends Component {
  constructor (){
    super()
    this.state = {
      fontLoaded: false, 
      isReady: false

    }; 
  }


  async componentDidMount() {
    SplashScreen.preventAutoHide();

    await Font.loadAsync({
      "uber" : require("./assets/fonts/UberMoveText-Medium.ttf"),
      "uber-l" : require("./assets/fonts/UberMoveText-Light.ttf"),
      "uber-r" : require("./assets/fonts/UberMoveText-Regular.ttf"),
      "uber-b" : require("./assets/fonts/AvertaCyrillicSemiBold.ttf"),
      "avertalight" : require("./assets/fonts/AvertaCyrillicLight.ttf"),
      "SFUIDisplay-Bold": require("./assets/fonts/SFUIDisplay-Semibold.ttf"),
      "SFUIDisplay-Regular": require("./assets/fonts/SFUIDisplay-Regular.ttf"),
      "SFUIDisplay-Thin": require("./assets/fonts/UberMoveText-Light.ttf")


    });
    this.setState({ fontLoaded: true }); 
  }
  render() {

 
    if (this.state.fontLoaded) {
      return <Navigation />;
    } else {
      return <AppLoading />;
    }  

  } 
}