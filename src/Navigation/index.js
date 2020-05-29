import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import Slider from "../screens/Slider/index";
import SignUp from "../screens/SignUp/index";
import OTP from "../screens/OTP/index";
import SignIn from "../screens/SignIn/index"
import Home from "../screens/Home";
import HomeX from "../screens/Home2/index";
import Video from "../screens/Welcome";
import Lifestyle from "../screens/Lifestyle";
import Card from "../screens/Card";

const AppNavigator = createStackNavigator(
    {
        Slider: {
            screen: Slider,
            navigationOptions: {
              headerShown: false
            }
          },
        SignUp: {
          screen: SignUp,
          navigationOptions: {
            headerShown: false
          }
        },
        OTP: {
          screen: OTP,
          navigationOptions: {
            headerShown: false
          }
        },
        SignIn: {
          screen: SignIn,
          navigationOptions: {
            headerShown: false
          }
        },
        Home: {
          screen: Home,
          navigationOptions: {
            headerShown: false
          }
        },
        HomeX: {
          screen: HomeX,
          navigationOptions: {
            headerShown: false
          }
        },
        Video: {
          screen: Video,
          navigationOptions: {
            headerShown: false
          }
        },
        Lifestyle:{
          screen: Lifestyle,
          navigationOptions: {
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'uber',
            },
            headerTitleAlign: 'center'
          },
        },
        Card:{
          screen: Card,
          navigationOptions: {
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'uber',
              alignItems: 'center'
            },
            headerTitleAlign: 'center'
          },
         
        },
    },
    
    {
        initialRouteName: "Slider"
    }
);

export default createAppContainer(AppNavigator);