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
    top: height/4.5,
 },
 input: {
     flex: 1,
     borderColor: color.ePayOrange,
     borderRadius: 8,
     marginBottom: height/30,
     height: height/18,
     marginTop: 15,
     borderWidth: 2,
     fontStyle: 'normal',
     fontFamily: 'uber'
 },
  text: {
    fontFamily: 'uber-l',
    fontSize: 25,
    color: color.ePayOrange,
    fontStyle: 'normal'
 }
}
