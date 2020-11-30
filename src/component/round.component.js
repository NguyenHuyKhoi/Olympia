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
import AnswerComponent from './answer.component';
import ProgressBarComponent from './progress_bar.component';
import QuestionComponent from './question.component';

import {connect }from 'react-redux'
import * as actions from '../redux/action/practice.action'
import AnswersComponent from './answers.component';

class RoundComponent extends Component{
    
    filterState=()=>{
        const ri=this.props.practice.current_round_index
        const qi=this.props.practice.current_question_index;
        const round=this.props.practice.rounds[ri];


        let arr;
        if (ri===1){
            arr=round.questions.map(e=>e.state);
        }
        else {
            arr=round.map(e=>e.question.state);
        }

        return arr;
    }

    answer=()=>{
        console.log('answer question',this.props.practice.current_question_index)
        this.props.answer(0)
        
    }

    render(){

        

        // console.log('answer :',this.props.answer)
        const ri=this.props.practice.current_round_index
        const qi=this.props.practice.current_question_index;

        if (ri!==this.props.initial_round) {
            this.props.nextRound();
        }
        console.log('ri :',ri);
        console.log('qi :',qi);
        
        console.log('rounds :',this.props.practice.rounds);
       
        const round=this.props.practice.rounds[ri]; 

        let total_question;
        let question;
        let metadata;
        if (ri===1){
            console.log('round 2:',round)
            total_question=round.questions.length;
            question=round.questions[qi];
            metadata={};
        }
        else {
            total_question=round.length;
            question=round[qi].question;
            metadata=round[qi].metadata;

            console.log('question in round :',question);
        }
        return (
            <View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:10}}>
         

                <View style={{width:320,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize: 22,color:SILVER}}>
                        {'Câu '+(qi+1)+'/'+(total_question)}
                    </Text>

                    <Text style={{fontSize: 22,color:SILVER}}>
                        {'32s'}
                    </Text>
                </View>
                <ProgressBarComponent question_states={this.filterState()}/>
                <QuestionComponent question={question} metadata={metadata} />
                <AnswersComponent answers={question.answers}  onPress={this.answer}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(RoundComponent)
