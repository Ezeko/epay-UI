import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
    text: {
        color: color.white,
        fontFamily: 'uber-b',
        flex: 1,
        fontSize: 22,

    },
    container: {
        flex:1,
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
        
    },
    icon: {
        marginLeft: width/30,
        marginRight: width/25
    },
    textView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginLeft: 5,
    }
}