import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import Slider from "../screens/Slider/index";
import SignUp from "../screens/SignUp/index";
import OTP from "../screens/OTP/index";
import SignIn from "../screens/SignIn/index"
import Home from "../screens/Home";
import HomeX from "../screens/Home2/index";
import Welcome from "../screens/Welcome";
import Lifestyle from "../screens/Lifestyle";
import Card from "../screens/Card";
import Saving from "../screens/Saving";
import Loan from "../screens/Loan"

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
        Saving: {
          screen: Saving,
          navigationOptions: {
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'uber',
            },
            headerTitleAlign: 'center'
          },
        },
        Loan: {
          screen: Loan,
          navigationOptions: {
            headerShown: true,
            headerTitleStyle: {
              fontFamily: 'uber',
            },
            headerTitleAlign: 'center'
          },
        },
        Welcome: {
          screen: Welcome,
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
        initialRouteName: "Welcome"
    }
);

export default createAppContainer(AppNavigator);