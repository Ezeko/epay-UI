import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default{
    wrapper: {},
    firstView: {
        height,
        width,
        image: {
            height: '100%',
            width
        }
    },
    thirdView: {
        height,
        width,
        image: {
            height: '100%',
            width
        }
    },
    text: {
        flex: 1,
        marginTop: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    firstText: {
        fontFamily: 'uber-b',
        fontSize: width/6,
        color: color.whiteOff,
    },
    secondText: {
        fontFamily: 'uber-b',
        fontWeight: 'bold',
        color: color.white,
        fontSize: width/15,
    }
}