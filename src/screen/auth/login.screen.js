import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import InputTextComponent from '../../component/input_text.component';
import { APP_NAME } from '../../resource/const';
import { LOGO } from '../../resource/image';
import { LIGHT_INDIGO, WHITE } from '../../resource/palette';

export default class LoginScreen extends Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor: LIGHT_INDIGO,flexDirection:'column',
                alignItems:'center',padding:20}}>
                <Image source={LOGO} resizeMethod='resize' style={{width: 120,height:120,marginTop: 60}}/>
                <Text style={{fontSize:25,color:WHITE,fontWeight:'bold',marginTop: 10}}>
                    {APP_NAME}
                </Text>
                <InputTextComponent logo='account-circle' label='Email'/>
            </View>
        )
    }
}