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
        fontFamily: 'uber-b',
        fontSize: 22,
        top: 25,
        left: 12
    },
    foot: {
        flex: 1,
        flexDirection: 'row',
        top: height/1.5,
        width
    },
    category: {
        fontFamily: 'uber-b',
        fontSize: 26,
        backgroundColor: color.white,
        border: 2,
        border: 'coral',
        borderRadius: 20,
        textAlign: 'center',
        width: width/2.2,
    },
    about: {
        fontFamily: 'uber',
        marginHorizontal: 20,
        fontFamily: 'uber-b',
        fontSize: 26,
        backgroundColor: color.ePayOrange,
        border: 2,
        border: '#f58635',
        borderRadius: 20,
        textAlign: 'center',
        width: width/2,
    }
}
