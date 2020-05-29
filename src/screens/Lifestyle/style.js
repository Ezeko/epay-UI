import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
   wrapper: {
      flex: 1,
      height,
      width
    },
    head: {
        //flex: 1,
        flexDirection: 'row',
        width,
        marginTop: height/55,
        alignItems: 'flex-start',
        justifyContents: 'center',
    },
    iconHead: {
        width: width*0.6,
        marginHorizontal: width/25,
        height: height*0.1,
    },
    image: {
        backgroundColor: color.black
    },
    icon: {},
    main: {
        flex: 1,
        flexDirection: 'row',
        width,
        marginTop: height/25,
    },
    text: {
        fontFamily: 'uber',
        marginHorizontal: 5,
    },
    inputIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContents: 'center',
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: color.gray,
        elevation: 2,
    },
    lifestyle: {
        //flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 5,

        
    },
    firstMainPart: {
        width: width * 0.4,
    },
    secondMainPart: {
        width: width * 0.55,
    },
}