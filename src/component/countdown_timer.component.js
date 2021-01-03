import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GRAY, INDIGO_1, INDIGO_3, SILVER, WHITE } from '../util/palette';

export default class CountdownTimerComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            time:this.props.duration
        };
        this.timeId=null
    };


    pause=()=>{
        console.log('timer pause ')
        if (this.timeId){
            clearInterval(this.timeId);
            this.timeId=null;
        }
    }

    getTime=()=>{
        return this.state.time
    };
    
    reset=()=>{
       
        console.log('timer reset ')
        this.pause();
        this.setState({time:this.props.duration});
        this.loop();
    }

    loop=()=>{
        this.timeId=setInterval(()=>{
            let t =this.state.time;

            console.log('timer loop: ',t)
            if (t<=0){
                this.pause();
                if (this.props.onTimeOut!==undefined){
                    this.props.onTimeOut();
                };
                // this.reset();
                return ;
            };

            this.setState({time:t-1})
        },1000)
    };

    render(){
        return (
            <View style={{position: 'absolute',top:15,right:30,zIndex:1}}>
                <Text style={{fontSize:20,color:SILVER}}>
                    {this.state.time+' s'}
                </Text>
           
            </View>
        )
    }
}