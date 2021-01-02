import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../util/palette';


class Word extends Component {
    defineColor=(item)=>{
        console.log(item.state)
        switch (item.state){
            case 'correct': return GREEN;
            case 'wrong': return RED;
            case 'current': return WHITE;
            case 'remain':return SILVER
        }
    }
    render(){
        const question=this.props.question;
        const chars=[...question.answer.toUpperCase()];
        console.log('question :',chars);
        return (
            <View style={{flexDirection:'row'}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:32,height:32,borderRadius:16,
                                backgroundColor:this.defineColor(question),
                                justifyContent: 'center',alignItems:'center',marginLeft:6,
                                marginTop:10}}>
                            
                            {
                                question.state==='correct'?
                                <Text style={{fontSize:18,color:WHITE}}>
                                    {item}
                                </Text>
                                :
                                null
                            }
                        </View>
                                
                    ))
                }
            </View>
        )
    }
}

class Keyword extends Component {
    defineColor=(item)=>{
        console.log(item.state)
        switch (item.state){
            case 'correct': return GREEN;
            case 'wrong': return RED;
            case 'current': return WHITE;
            case 'remain':return SILVER
        }
    }
    render(){
        const question=this.props.question;
        const chars=[...question.answer.toUpperCase()];
        return (
            <View style={{flexDirection:'row',marginBottom:20}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:32,height:32,borderRadius:6,
                                backgroundColor:this.defineColor(question),
                                justifyContent: 'center',alignItems:'center',marginLeft:6,
                                marginTop:10}}>
                            
                            {
                                question.state==='correct'?
                                <Text style={{fontSize:18,color:WHITE}}>
                                    {item}
                                </Text>
                                :
                                null
                            }
                        </View>
                                
                    ))
                }
            </View>
        )
    }
}

export default class CrosswordsComponent extends Component{

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
        console.log('questions :',questions);
        return (
           
            <View style={{width: 320,flexDirection:'column',alignItems:'center'}}>
                <Keyword question={this.props.keyword_question}/>
                {
                    questions.map((item,index)=>(
                        <Word  key={''+index} question={item}/>
                    ))
                }
            </View>




        )
    }
}