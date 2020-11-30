import React,{Component} from 'react';

import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import AnswerComponent from '../../component/answer.component';
import AnswersComponent from '../../component/answers.component';
import ButtonComponent from '../../component/button.component';
import FooterComponent from '../../component/footer.component';
import HeaderComponent from '../../component/header.component';
import ProgressBarComponent from '../../component/progress_bar.component';
import { SILVER, INDIGO_3 } from '../../resource/palette';
const question={
    answers:[
        '4',
        '5',
        '7',
        '10'
    ]
}

const round1={
    questions:[
        // {
        //     state:'wrong'
        // },
        // {
        //     state:'correct'
        // },
        // {
        //     state:'wrong'
        // },
        // {
        //     state:'correct'
        // },
        // {
        //     state:'wrong'
        // },
        // {
        //     state:'correct'
        // },
        {
            state:'correct'
        },
        {
            state:'current'
        },
        {
            state:'remain'
        },
        // {
        //     state:'remain'
        // },
        // {
        //     state:'remain'
        // },
        // {
        //     state:'remain'
        // },
    ]
}
export default class PracticeRound1Screen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
				justifyContent: 'center',
                alignItems:'center',padding:20}}>
     
                <ProgressBarComponent questions={round1.questions}/>
                <AnswersComponent answers={question.answers}/>
            </View>
        )
    }
}