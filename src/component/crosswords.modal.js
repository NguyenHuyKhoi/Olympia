import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Alert
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../util/palette';
import Modal from 'react-native-modalbox'
import AnswersOptionComponent from './answers_option.component';
import AnswersInputComponent from './answers_input.component';

class Word extends Component {
    defineColor=(state)=>{
        switch (state){
            case 'correct': return GREEN;
            case 'wrong': return RED;
            case 'current': return WHITE;
            case 'remain':return SILVER
        }
    }
    render(){
        const {word,state}=this.props;
        const chars=[...word.toUpperCase()];
        console.log('WordComponent :',chars)
        return (
            <View style={{flexDirection:'row'}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:26,height:26,borderRadius:13,
                                backgroundColor:this.defineColor(state),
                                justifyContent: 'center',alignItems:'center',marginLeft:3,
                                marginTop:6}}>
                            
                            {
                                state==='correct'?
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
    defineColor=(round_is_solved)=>{
        if (round_is_solved) return GREEN;
        return SILVER;
    }
    render(){
        const {keyword}=this.props;
    //    const chars=[...keyword.toUpperCase()];

        const chars=[...keyword]

        console.log('KeywordComponent :',chars)
        return (
            <View style={{flexDirection:'row',marginBottom:20,flexWrap:'wrap'}}>
                {
                    chars.map((item,index)=>(
                        <View 
                            key={''+index}
                            style={{width:26,height:26,borderRadius:5,
                                backgroundColor:this.defineColor(true),
                                justifyContent: 'center',alignItems:'center',marginLeft:4,marginTop:6}}>
                            
                            {
                                1===1?
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

export default class CrosswordsModal extends Component{

    constructor(props){
        super(props)

    }
    open=()=>{
        this.modal.open();
    }

    close=()=>{
        this.modal.close();
    }

    defineColor=(item)=>{
        switch (item.state){
            case 'correct': return GREEN;
            case 'wrong'  : return RED;
            case 'current': return WHITE;
            case 'remain' : return SILVER;
        }
    }

    answerKeyword=(is_correct_keyword)=>{
        if (is_correct_keyword) Alert.alert('Tu khoa dung')
            else Alert.alert('Tu khoa sai');
    }

    render(){
        const {answers,keyword,states}=this.props;

        while (states.length<4) {
            states.push('remain')
        };

        console.log('Crossword Modals :',keyword,answers,states)
        return (
           
            <Modal 
                position='center' 
                ref={ref=>this.modal=ref} 
                backdrop={true}
                style={{width:'85%',height:360,borderRadius:5,backgroundColor:'#953593'}}
                isOpen={false}>
                <View style={{flex:1,flexDirection:'column',alignItems:'center',
                    backgroundColor:'#430698',
                    justifyContent:'flex-start'}}>
                    <Keyword keyword={keyword}/>
                    {
                    answers.map((item,index)=>(
                        <Word  key={''+index} word={item} state={states[index]}/>
                    ))
                    }

                    <AnswersInputComponent correct_answer={keyword} onAnswer={this.answerKeyword}/>
                </View>
            </Modal>




        )
    }
}