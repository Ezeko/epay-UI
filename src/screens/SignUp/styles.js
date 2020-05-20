import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
 container: {
    flex: 1,
    backgroundColor: 'orange',
 },
 wrapper: {
    margin: height/8,
 },
 input: {
     flex: 1,
     backgroundColor: color.white,
     borderRadius: 8,
     marginBottom: height/30,

 }
}
