import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../util/palette';
import { initialArray } from '../util/helper';

export default class ProgressBarComponent extends Component{

    defineColor=(index,states)=>{

        if (index>=states.length) return SILVER
        switch (states[index]){
            case 'correct': return GREEN;
            case 'wrong'  : return RED;
            case 'current': return WHITE;
        }
    }

    render(){
        const {states,amount}=this.props;

        const arr=initialArray(amount,'remain');
       // console.log('states :',states);
        const width_item=320/(1.3*amount);
        return (
            <View style={{
                width:320,height:5,flexDirection:'row',justifyContent: 'space-between',
                marginTop:5
            }}>
                {
                    arr.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:width_item,height:5,
                            backgroundColor:this.defineColor(index,states)}}/>
                    ))
                }
            </View>


        )
    }
}