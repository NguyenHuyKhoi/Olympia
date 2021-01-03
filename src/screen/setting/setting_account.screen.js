import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    Alert,
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from '../../component/button.component';
import HeaderComponent from '../../component/header.component';
import InputTextComponent from '../../component/input_text.component';
import { APP_NAME } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_1, INDIGO_2, WHITE,GREEN, SILVER } from '../../util/palette';

export default class SettingAccountScreen extends Component{


    render(){
        return (
            <View style={{flex:1, backgroundColor: INDIGO_2,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                <HeaderComponent/>
                <Text style={{fontSize:25,color:WHITE,fontWeight:'bold',marginTop:100,marginBottom:50}}>
                    TÀI KHOẢN
                </Text>

                <InputTextComponent logo='account-circle' label='Số điện thoại'  value={'huykhoiqc@gmail.com'} />
                <InputTextComponent logo='account-circle' label='Tên người dùng'  value={'huykhoiqc@gmail.com'} />
                <InputTextComponent logo='https' label='Mật khẩu' value={'123456'} />

                <ButtonComponent label='LƯU' text_color={WHITE} background={GREEN} 
                    onPress={()=>this.props.navigation.navigate('home')}
                    margin_top={120}/>
               
            </View>
        )
    }
}