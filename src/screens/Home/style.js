import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
    wrapper: {
        height,
        width
    },
    image: {
        height: '100%',
        width,
    },
    welcome: {
        fontFamily: 'uber',
        //fontSize: 22,
        top: 20,
        left: 12,
        fontStyle: 'normal'
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        top: height/1.5,
        width
    },
    category: {
        fontFamily: 'uber',
        fontSize: 26,
        backgroundColor: color.white,
        borderRadius: 20,
        textAlign: 'center',
        width: width/2.2,
        borderColor: color.ePayOrange,
        borderWidth: 2,
        fontStyle: 'normal',
        elevation: 2,
    },
    about: {
        fontFamily: 'uber',
        marginHorizontal: 20,
        fontSize: 26,
        backgroundColor: color.ePayOrange,
        //border: 2,
        //border: '#f58635',
        borderRadius: 20,
        textAlign: 'center',
        width: width/2.2,
        fontStyle: 'normal',
        elevation: 2,
        borderColor: color.ePayOrange,
        borderWidth: 2
    },
    icon: {
        marginRight: width/1.1,
        marginTop: 10,
    }
}
