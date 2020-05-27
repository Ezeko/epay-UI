import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
    wrapper: {
        flex: 1,
        marginTop: height/20,
        
    },
    head: {
        marginTop: height/28,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    topmost: {
        flex: 1,
        height,
        backgroundColor: color.black,
    },
    icon: {
        backgroundColor: 'white', 
        marginLeft: width/3,
    },
    scroll: {
        //height: height* 0.6,
        flex: 1
    },
    vertical: {
        marginTop:height/25,
        backgroundColor: color.ePayOrange,
        height: 4,
    },
    widget: {
        flex: 1,
        //flexDirection: 'row',
        //alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginBottom: height/16,
    }
}