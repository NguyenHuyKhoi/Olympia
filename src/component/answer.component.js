import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from '../resource/palette';

export default class AnswerComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            state:'normal'
        }
    }
    
    defineColor=()=>{
        switch(this.state.state){
            case 'normal': return SILVER;
            case 'correct': return GREEN;
            case 'wrong': return RED;
        }
    }

    onPress=()=>{
        switch(this.state.state){
            case 'normal': 
                this.setState({state:'correct'});
                break;
            case 'correct': 
                this.setState({state:'wrong'});
                break;
            case 'wrong': 
                this.setState({state:'normal'});
                break;
        }
    }

    render(){
       // console.log('answer :',this.props.answer)
        return (
            <TouchableOpacity 
                //onPress={()=>this.onPress()}
                style={{
                    width:320,height:45,backgroundColor:INDIGO_3,
                    borderWidth: 1,
                    borderColor: this.defineColor(),
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    borderRadius:22,alignItems:'center',
                    paddingHorizontal:20,paddingVertical:7,marginTop: 10}}>
                <Text style={{fontSize:20,color:this.defineColor()}}>
                    {
                        this.props.answer.content
                    }
                </Text>
                
                <View style={{width:30,height:30,borderRadius:15,borderWidth:1,
                    borderColor:this.defineColor(),
                    backgroundColor:this.state.state!=='normal'?this.defineColor():INDIGO_3,
                    justifyContent: 'center',alignItems:'center'}}>
                    {
                        this.state.state!=='normal'?
                        <Text style={{fontSize:17,color:SILVER}}>
                            {
                                this.state.state==='correct'?'v':'x'
                            }
                        </Text>
                        :
                        null
                    }
                </View>
            </TouchableOpacity>
        )
    }
}