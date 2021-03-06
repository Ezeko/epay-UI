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
 input: {
     flex: 1,
     borderColor: color.ePayOrange,
     borderRadius: 8,
     marginBottom: height/30,
     height: height/18,
     borderWidth: 2
 },
 top: {
     marginBottom: height/20,
     textAlign: 'center',
     fontFamily: 'uber-l',
     borderRadius: 12

 },
 button: {
    backgroundColor: color.ePayOrange,
    elevation: 2,
    borderRadius: 12,
    height: 30

 },
 signIn: {
     flexDirection: 'row',
     alignItems: 'space-between',
     justifyContents: 'center',
 },
 text: {
    fontFamily: 'uber-l',
    fontSize: 25,
    textAlign: 'center',
    color: color.white
 }
}
