import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from '../resource/palette';
import AnswerComponent from './answer.component';

export default class AnswersComponent extends Component{
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

    defineResultText=()=>{
        switch(this.state.state){
            case 'normal': return '';
            case 'correct': return 'Chính xác !!!';
            case 'wrong': return 'Chưa chính xác !!!';
        }
    }

    render(){
       // console.log('answers :',this.props.answers)
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style={{width:'100%',flexDirection:'column',alignItems:'center',marginTop: 20}} >

                <FlatList 
                    data={this.props.answers}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item,index})=>(
                        <AnswerComponent answer={item}/>
                    )}
                />

                <Text style={{fontSize:18,color:this.defineColor(),fontStyle:'italic',marginTop:10}}>
                    {
                        this.defineResultText()
                    }
                </Text>
          
            </TouchableOpacity>
        )
    }
}