import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { GREEN, INDIGO_3, RED, SILVER, WHITE } from '../util/palette';
import ProgressBarComponent from './progress_bar.component';
import QuestionComponent from './question.component';

import {connect }from 'react-redux'
import * as actions from '../redux/action/practice.action'
import { ROUNDS } from '../util/constants';
import AnswersOptionComponent from './answers_option.component';
import AnswerInputComponent from './answers_input.component'
class RoundComponent extends Component{
    


    calculateScore=(is_correct)=>{

        console.log('RoundComponent calculateScore :',is_correct)
        if (!is_correct) return 0;

        console.log('RoundComponent calculateScore :',cri,cqi)

        const {cri,cqi,rounds}=this.props.practice;
        if (cri===0) return ROUNDS[0].score;
        if (cri===1) return ROUNDS[1].score;
        if (cri===2) return ROUNDS[2].score;
        let round4=rounds[3];
        let q=round4[cqi];
        switch (q.code){
            case 'easy':return ROUNDS[3].levels[0].score
            case 'medium':return ROUNDS[3].levels[1].score
            case 'hard':return ROUNDS[3].levels[2].score
        }

    };

    answer=(is_correct)=>{

        const {cri,cqi}=this.props.practice;

        let score=this.calculateScore(is_correct)
        this.props.answer(score);


        if (cqi===ROUNDS[cri].number_question-1) 
            if (cri<3) this.nextRound()
                else this.viewResult();


    }

    nextRound=()=>{
        this.props.navigation.navigate('practice_result')
    }

    viewResult=()=>{
        this.props.navigation.navigate('practice_result')
    }
    render(){

        const {cri,cqi,rounds,questions_state}=this.props.practice

       
        const round=rounds[cri]; 
        let question={};
        let questions_num=ROUNDS[cri].number_question

        if (cri===1){
            question=round.questions[cqi];
        }
        else {
            question=round[cqi]
        };

        console.log('RoundComponent question_num :',questions_num,questions_state)

        return (
            <View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:10}}>
         

                
                <View style={{width:320,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize: 22,color:SILVER}}>
                        {'Câu '+(cqi+1)+'/'+(questions_num)}
                    </Text>

                    <Text style={{fontSize: 22,color:SILVER}}>
                        {'32s'}
                    </Text>
                </View>
                <ProgressBarComponent states={questions_state} amount={questions_num}/>

                <View style={{flex:5,marginTop:20,width:'100%'}}>
                    <QuestionComponent question={question}/>
                </View>

                <View style={{flex:4,width:'100%',marginTop:10}}>
                    {
                    cri!==1?
                    <AnswersOptionComponent answers={question.answers}  onAnswer={this.answer} />
                    :
                    <AnswerInputComponent correct_answer={question.answer} onAnswer={this.answer}/>
                    }
                </View>
              
               
               
            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(RoundComponent)
