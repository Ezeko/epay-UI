import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
    image: {
        height: height/3
    },
    content: {
        marginBottom: height/30
    },
    firstText: {
        fontFamily: 'uber-l',
        color: color.ePayOrange,
        left: width/2.3,
        top: height/40
    },
    secondText: {
        //color: color.whiteSmoke,
        fontFamily: 'uber-l',
        left: width/2.4,
        top: height/50
    },
    thirdText: {
        //color: color.whiteSmoke,
        fontFamily: 'uber-l',
        left: width/2.35,
        top: height/70
    },
    fourthText: {
        fontFamily: 'uber',
        color: color.white,
        marginLeft: width/50,
        marginTop: height/15,
    },
    fifthText: {
        fontFamily: 'uber-l',
        color: color.white,
        marginLeft: width/50,
    },
}