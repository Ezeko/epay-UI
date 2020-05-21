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
     height: height/18,
     
 },
 foot: {
     marginBottom: height/7,
     marginLeft: height/6, 
     marginRight: height/6,

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
     marginTop: 10
 },
 signInText: {
    fontFamily: 'uber'
 },
 signInText2: {
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'uber'
 }
}
