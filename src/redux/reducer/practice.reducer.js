import { ROUNDS } from '../../util/constants'
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
    switch (action.type){
        case practiceActions.GET_PRACTICE_ROUNDS:   
            console.log('PracticeReducer  GET_PRACTICE_ROUNDS:',payload);
            return {
                ...state,
                ...payload
            }

        case practiceActions.ANSWER:
            let {cri,cqi,rounds,questions_state}=state;

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
        default:
            return state
    }
}