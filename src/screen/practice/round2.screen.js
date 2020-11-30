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
// const question={
//     answers:[
//         '4',
//         '5',
//         '7',
//         '10'
//     ]
// }
const question={
    label:'Lịch sử',
    content:'Ai là hoàng đế đầu tiên của nước ta',
    image:'https://randomuser.me/api/portraits/men/86.jpg',
    score:10
}

const round2={
    keyword_question:{
        answer:'mountain',
        state:'remain'
    },
    questions:[
        {
            state:'correct',
            answer:'himalaya'
        },
        {
            state:'correct',
            answer:'karate'
        },
        {
            state:'correct',
            answer:'89'
        },
        {
            state:'current',
            answer:'1999'
        },
    ]
    
}


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