import React,{Component} from 'react';

import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import AnswerComponent from '../../component/answer.component';
import AnswersComponent from '../../component/answers.component';
import ButtonComponent from '../../component/button.component';
import CrosswordsComponent from '../../component/crosswords.component';
import FooterComponent from '../../component/footer.component';
import HeaderComponent from '../../component/header.component';
import ProgressBarComponent from '../../component/progress_bar.component';
import QuestionComponent from '../../component/question.component';
import { SILVER, INDIGO_3 } from '../../resource/palette';


export default class PracticeRound2Screen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
				justifyContent: 'center',
                alignItems:'center',padding:20}}>
     
                {/* <ProgressBarComponent questions={round2.questions}/> */}

                {/* <CrosswordsComponent questions={round2.questions} keyword_question={round2.keyword_question}/> */}
                <QuestionComponent question={question}/>
                {/* <AnswersComponent answers={question.answers}/> */}
            </View>
        )
    }
}