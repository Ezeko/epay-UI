import React, {Component} from 'react';
import { 
    Text, 
    View,
    AsyncStorage, 
    ImageBackground, 
    StatusBar,
} from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Drawer} from 'react-native-gesture-handler/DrawerLayout';
import Side from '../../Components/SideBar/index';



export default class Home extends Component {
    constructor(){
        super();
        this.state = {};
    }


    render () {
        return(
        <Drawer
            ref={ref => {
                this.drawer = ref;
                }}
            content={<Side navigation={this.props.navigation} />} 
            onClose={() => this.drawer._root.close()}
            >
            <View style = {style.wrapper}>
                <StatusBar barStyle = 'dark-content' />
                <Side />
                

                <ImageBackground source = {require('../../../assets/images/homeImage.png')}
                style={style.image}
                >
                    <View>
                        <Text style = {style.welcome}>Welcome to Epay</Text>
                    </View>

                    <View style = {style.foot}>
                        <TouchableOpacity style = {style.categoryView}>
                            <Text style = {style.category}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {style.about}>About Epay</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>

            </View>
        </Drawer>
        )
    }
}

Drawer.defaultProps.styles.mainOverlay.elevation = 0;