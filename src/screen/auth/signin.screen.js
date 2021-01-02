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
import InputTextComponent from '../../component/input_text.component';
import { APP_NAME } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_1, INDIGO_2, WHITE,GREEN } from '../../util/palette';

export default class SigninScreen extends Component{


    render(){
        return (
            <View style={{flex:1, backgroundColor: INDIGO_2,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                <Image source={LOGO} resizeMethod='resize' style={{width: 120,height:120,marginTop: 50}}/>
       
                <Text style={{fontSize:25,color:WHITE,fontWeight:'bold',marginTop: 10}}>
                    {APP_NAME}
                </Text>
                <InputTextComponent logo='account-circle' label='Email' />
                <InputTextComponent logo='https' label='Password' />
                <ButtonComponent label='ĐĂNG NHẬP' text_color={WHITE} background={GREEN} 
                    onPress={()=>this.props.navigation.navigate('home')}
                    margin_top={50}/>
                
                <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',
                    position:'absolute',bottom:20,width:'100%'}}>
                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('signup')} >
                        <Text style={{fontSize:17,color:WHITE}}>
                            Tạo tài khoản
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Text style={{fontSize:17,color:WHITE}}>
                            Quên mật khẩu
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}