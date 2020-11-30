import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GRAY, INDIGO_1, INDIGO_3, SILVER, WHITE } from '../resource/palette';

export default class RoundScoreComponent extends Component{
    render(){
        const round=this.props.round;

        return (
            <View 
                style={{
                    width:320,height:50,backgroundColor:INDIGO_3,
                    borderWidth: 1,borderColor: GRAY,
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    borderRadius:15,alignItems:'center',
                    paddingHorizontal:10,paddingVertical:7,marginTop: 20}}>
                <Text style={{fontSize:18,color:SILVER}}>
                    {'Vòng '+round.index+' :'+round.name}
                </Text>
                <Text style={{fontSize:18,color:SILVER}}>
                    {this.props.score>0?this.props.score:'...'}
                </Text>
            </View>
        )
    }
}