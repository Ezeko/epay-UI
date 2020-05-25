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
import { Drawer } from 'native-base';
import Side from '../../Components/SideBar/index';
import { Icon } from 'react-native-elements';



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
                <TouchableOpacity
                onPress={() => this.drawer._root.open()}
                >
                    <View >
                        <Icon
                        style = {style.icon}
                        name = 'menu'
                        />
                    </View>
                   
                </TouchableOpacity>
                

                <ImageBackground source = {require('../../../assets/images/homeImage.png')}
                style={style.image}
                >
                    <View>
                        <Text style = {style.welcome}>Welcome to ePay</Text>
                    </View>

                    <View style = {style.foot}>
                        <TouchableOpacity style = {style.categoryView}>
                            <Text style = {style.category}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {style.about}>About ePay</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ImageBackground>

            </View>
        </Drawer>
        )
    }
}

//Drawer.defaultProps.styles.mainOverlay.elevation = 0;