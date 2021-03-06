import color from "../../Config/color";
import {Dimensions} from "react-native";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export default {
   wrapper: {
      flex: 1,
    },
    widget: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width,
        justifyContent: 'center',
        marginTop: height/20,
    },
    logout: {
        marginTop: 15,
    }
}