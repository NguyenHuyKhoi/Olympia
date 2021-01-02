import { INITIAL_ROUND, ROUNDS } from '../../util/constants'
import firebase from '../../util/firebase'
import {practiceActions} from '../action_constant'

const initial_state={}

/// fields : 
// cri: current_round_index
// cqi: current_question_index
// rounds : data of 4 rounds 
// questions_state : state of questions on current round ( on ['none','current','wrong','correct'])
export default practiceReducer=(state=initial_state,action)=>{
    let payload=action.payload
    let {cri,cqi,rounds,questions_state}=state;
    switch (action.type){
        case practiceActions.GET_PRACTICE_ROUNDS:   
            return {
                ...state,
                ...payload,
                cri:INITIAL_ROUND,
                cqi:0,
                questions_state:['current']
            }

        case practiceActions.ANSWER:
         

            questions_state[questions_state.length-1]=payload.is_correct?'correct':'wrong';
            questions_state.push('current');

            let total_question= ROUNDS[cri].number_question
            console.log('total question :',total_question);

            if (cqi===total_question-1){
                cqi=0;
                cri=cri<3?cri+1:cri;
                questions_state=['current'];
            }
            else {
                cqi++;
            }
            return {
                ...state,
                cri,
                cqi,
                questions_state
        }

        case practiceActions.CHOOSE_ROUND4_QUESTIONS:
            rounds[3]=payload.round4;

            console.log('practiceReducer round4:',payload.round4)
            return {
                ...state,
                rounds
            };

        default:
            return state
    }
}