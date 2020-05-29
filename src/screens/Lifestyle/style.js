import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
   wrapper: {
      flex: 1,
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        width,
        marginBottom: width/25,
        alignItems: 'center',
        justifyContents: 'center'
    },
    iconHead: {},
    image: {},
    icon: {},
    main: {},
    text: {},
    inputIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContents: 'center',
    },
}