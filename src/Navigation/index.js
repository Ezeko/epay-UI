import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import Slider from "../screens/Slider/index";
import SignUp from "../screens/SignUp";
import OTP from "../screens/OTP";
import SignIn from "../screens/SignIn"

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
    },
    {
        initialRouteName: "Slider"
    }
);

export default createAppContainer(AppNavigator);