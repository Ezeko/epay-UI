import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
    text: {
        color: color.whiteOff,
        fontFamily: 'uber-l',
        flex: 1,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontStyle: 'normal',

    },
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
        
    },
    icon: {
        width: width/15,
        marginLeft: width/30,
        marginRight: width/27,
        marginTop: 5,
        //alignItems: 'center',
    },
    textView: {
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginTop: 5,
    },


   /*
   sideBar: {
        flex: 1,
        width: width/4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderColor: color.whiteOff,
        borderWidth: 2,
        marginLeft: width/50,
        height: height/8
        
    },
    */
 
}