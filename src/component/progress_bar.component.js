import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../resource/palette';

export default class ProgressBarComponent extends Component{

    defineColor=(item)=>{
        switch (item.state){
            case 'correct': return GREEN;
            case 'wrong'  : return RED;
            case 'current': return WHITE;
            case 'remain' : return SILVER;
        }
    }

    render(){
        const questions=this.props.questions;
        const width_item=320/(1.3*questions.length);
        return (
            <View style={{
                width:320,height:5,flexDirection:'row',justifyContent: 'space-between',
                marginTop:20
            }}>
                {
                    questions.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:width_item,height:5,
                            backgroundColor:this.defineColor(item)}}/>
                    ))
                }
            </View>


        )
    }
}