import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text
} from 'react-native';
import ButtonComponent from '../../component/button.component';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN } from '../../resource/palette';

export default class PracticeWaitingScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                <Image source={LOGO} resizeMethod='resize' style={{width: 120,height:120,marginTop: 40}}/>
                <Text style={{fontSize:22,color:SILVER,marginTop: 15}}>
                    Vòng 1
                </Text>
                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 15}}>
                    KHỞI ĐỘNG
                </Text>

				<ButtonComponent label='Vào' text_color={SILVER} background={GREEN} 
						onPress={()=>this.props.navigation.navigate('practice_round1')}
                        margin_top={250}/>
                
            </View>
        )
    }
}