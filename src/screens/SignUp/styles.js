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
    marginHorizontal: height/8,
    marginVertical: height/22,
    
 },
 input: {
     flex: 1,
     //backgroundColor: color.ePayOrange,
     borderRadius: 8,
     marginBottom: height/30,
     height: height/18,
     borderColor: color.ePayOrange,
     borderWidth: 2,
     
     
 },
 foot: {
     marginBottom: height/7,
     marginLeft: height/6, 
     marginRight: height/6,

 },
 reg: {
    backgroundColor: color.ePayOrange,
    color: color.whiteSmoke,
    borderRadius: 12,
    height: height/22,
    width: '100%',
    fontSize: height/30,
    textAlign: 'center',
    fontFamily: 'uber'
 },
 signIn: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContents: 'center',
     marginTop: 10,
     left: 20,
 },
 signInText: {
    fontFamily: 'uber'
 },
 signInText2: {
    marginLeft: 10,
    textAlign: 'center',
    color: color.ePayOrange,
    fontSize: 18,
    fontFamily: 'uber'
 },
 regView: {
    elevation: 4,
 }
}
