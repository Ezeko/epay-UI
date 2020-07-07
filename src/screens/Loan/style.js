import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
 container: {
    flex: 1,
    backgroundColor: color.white,
    fontFamily: 'uber'
 },
 wrapper: {
    margin: height/8,
    top: height/7,
 },

}