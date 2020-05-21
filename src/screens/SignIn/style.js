import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
 container: {
    flex: 1,
    backgroundColor: 'orange',
    fontFamily: 'uber'
 },
 wrapper: {
    margin: height/8,
    top: height/7,
 },
 input: {
     flex: 1,
     backgroundColor: color.white,
     borderRadius: 8,
     marginBottom: height/30,
     height: height/18
 },
 top: {
     marginBottom: height/20,
     textAlign: 'center',
     fontFamily: 'uber',
     borderRadius: 12

 },
 button: {
    backgroundColor: color.black,
    borderRadius: 12,
    height: 30

 },
 signIn: {
     flexDirection: 'row',
     alignItems: 'space-between',
     justifyContents: 'center',
 },
 text: {
    fontFamily: 'uber',
    fontSize: 25,
    textAlign: 'center',
    color: color.white
 }
}
