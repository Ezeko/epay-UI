import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer } from "react-navigation";

import Slider from "../screens/Slider/index";

const AppNavigator = createStackNavigator(
    {
        Slider: {
            screen: Slider,
            navigationOptions: {
              header: null
            }
          },
    },
    {
        initialRouteName: "Slider"
    }
);

export default createAppContainer(AppNavigator);