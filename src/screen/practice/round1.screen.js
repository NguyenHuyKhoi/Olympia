import React,{Component} from 'react';

import {
    View,
    StyleSheet,
    Alert,
    Text
} from 'react-native';
import AnswerComponent from '../../component/answer.component';
import AnswersComponent from '../../component/answers.component';
import ButtonComponent from '../../component/button.component';
import FooterComponent from '../../component/footer.component';
import HeaderComponent from '../../component/header.component';
import ProgressBarComponent from '../../component/progress_bar.component';
import { SILVER, INDIGO_3 } from '../../resource/palette';


import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'
import QuestionComponent from '../../component/question.component';
import RoundComponent from '../../component/round.component';

class PracticeRound1Screen extends Component{


    // filterState=()=>{
    //     let arr= this.props.practice.rounds[0].map(e=>e.metadata.state);
    //  //   console.log('question states :',arr);
    //     return this.props.practice.rounds[0].map(e=>e.metadata.state);
    // }

    // answer=()=>{
    //     console.log('answer question',this.props.practice.current_question_index)
    //     this.props.answer(0)
        
    // }
    render(){
        // if (this.props.practice.current_round_index!==0) {
        //     this.props.navigation.navigate('practice_waiting');
        // }
        // const round1=this.props.practice.rounds[0]; 
        // const question_index=this.props.practice.current_question_index;
        // const question=round1[question_index];

   
        return (
            <RoundComponent
                initial_round={0}
                nextRound={()=>this.props.navigation.navigate('practice_waiting')}/>
			// <View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
            //     alignItems:'center',padding:10}}>
         

            //     <View style={{width:320,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            //         <Text style={{fontSize: 22,color:SILVER}}>
            //             {'Câu '+(question_index+1)+'/'+(round1.length)}
            //         </Text>

            //         <Text style={{fontSize: 22,color:SILVER}}>
            //             {'32s'}
            //         </Text>
            //     </View>
            //     <ProgressBarComponent question_states={this.filterState()}/>
            //     <QuestionComponent data={question} />
            //     <AnswersComponent answers={question.question.answers} onPress={this.answer}/>
            // </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeRound1Screen)
