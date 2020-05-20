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
 },
 input: {
     flex: 1,
     backgroundColor: color.white,
     borderRadius: 8,
     marginBottom: height/30,
     height: height/18
 },
 top: {
     marginTop: height/8,
     marginHorizontal: height/8,
     textAlign: 'center',
     fontFamily: 'uber',
     backgroundColor: color.white,
     borderRadius: 12

 },
 reg: {
    backgroundColor: color.black,
    color: color.whiteSmoke,
    height: height/22,
    width: '100%',
    fontSize: height/30,
    textAlign: 'center',
    fontFamily: 'uber'
 },
 signIn: {
     flexDirection: 'row',
     alignItems: 'space-between',
     justifyContents: 'center',
 },
 signInText: {
    fontFamily: 'uber'
 }
}
