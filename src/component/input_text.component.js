import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { INDIGO_1, WHITE } from '../resource/palette';

export default class InputTextComponent extends Component{
    render(){
        return (
            <View 
                style={{
                    width:320,height:50,backgroundColor:INDIGO_1,
                    borderWidth: 1,borderColor: WHITE,
                    flexDirection:'row',
                    borderRadius:25,alignItems:'center',
                    paddingHorizontal:15,
                   // paddingVertical:7,
                    marginTop: 20}}>
                <Icon name={this.props.logo} size={30} color={WHITE} />
                <TextInput 
                    placeholder={this.props.label} 
                    value={this.props.value!==undefined?this.props.value:''}
                    placeholderTextColor={WHITE} 
                    style={{flex:1,marginLeft:20,fontSize:17,color:WHITE}}/>
            </View>
        )
    }
}