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
    let {cri,cqi,rounds,questions_state,scores,is_finished}=state;
    switch (action.type){
        case practiceActions.GET_PRACTICE_ROUNDS:   
            return {
                ...state,
                ...payload,
                cri:INITIAL_ROUND,
                cqi:0,
                questions_state:['current'],
                scores:[0,0,0,0],
                is_finished:false
            }

        case practiceActions.ANSWER:
         
            console.log('practiceReducer answer :',payload.score)
            questions_state[questions_state.length-1]=payload.score>0?'correct':'wrong';
            scores[cri]+=payload.score;
            questions_state.push('current');

            let total_question= ROUNDS[cri].number_question
            console.log('total question :',total_question);

            if (cqi===total_question-1){
                cqi=0;
                is_finished=cri<3?false:true
                cri=cri<3?cri+1:cri;
                questions_state=[];
                questions_state.push('current')

                console.log('reset questions states :',questions_state)
            }
            else {
                cqi++;
            }
            return {
                ...state,
                cri,
                cqi,
                is_finished,
                questions_state,
                scores
        }

        case practiceActions.CHOOSE_ROUND4_QUESTIONS:
            rounds[3]=payload.round4;


            console.log('practiceReducer round4:',payload.round4)
            return {
                ...state,
                rounds,
                picked_star:payload.picked_star
            };

        default:
            return state
    }
}