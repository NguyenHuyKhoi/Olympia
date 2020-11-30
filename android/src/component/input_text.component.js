import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons/Icon';
import { SILVER, WHITE } from '../resource/palette';

export default class InputTextComponent extends Component{
    render(){
        return (
            <View 
                style={{
                    width:320,height:50,backgroundColor:SILVER,
                    borderWidth: 1,borderColor: WHITE,
                    borderRadius:25,justifyContent:'center',alignItems:'center',
                    paddingHorizontal:10,paddingVertical:7}}>
                <Icon name='account-circle' size={30} color={WHITE} />
                <TextInput placeholder='Email' size={17} style={{flex:1,marginRight:10}}/>
            </View>
        )
    }
}