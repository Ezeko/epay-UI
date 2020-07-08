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
    margin: height/9,
    top: height/15,
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