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
    text: {
        flex: 1,
        marginTop: height/3,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    firstText: {
        fontFamily: 'uber-b',
        fontSize: width/6,
        color: color.whiteOff,
        fontStyle: 'normal',
    },
    secondText: {
        fontFamily: 'avertalight',
        fontWeight: '500',
        color: color.whiteOff,
        fontSize: width/15,
        fontStyle: 'normal',
    },
    touchable: {
        color: 'white',
        alignItems: 'flex-end',
        fontFamily: 'uber',
        marginLeft: width/1.5,
        marginBottom: height/14,
        fontSize: width/17,

    }
}