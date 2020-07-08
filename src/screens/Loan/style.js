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
    margin: height/20,
    top: height/27,
 },
 text: {
   fontFamily: 'uber-l',
   fontSize: 25,
   color: color.ePayOrange,
   fontStyle: 'normal'
   },
   button: {
      backgroundColor: color.ePayOrange,
      elevation: 2,
      borderRadius: 12,
      height: 30
   
   },
   save: {
      color: color.white,
      fontFamily: 'uber-l',
      fontSize: 25,
      textAlign: 'center',
   
   }
   

}