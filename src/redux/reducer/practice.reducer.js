import firebaseHelper from '../../util/firebase.helper'
import {practiceActions} from '../action_constant'

const initial_state={
    rounds:null,
    current_round_index:0,
    current_question_index:0
}

export default practiceReducer=(state=initial_state,action)=>{
    switch (action.type){
        case practiceActions.RETRIEVE_ALL_ROUNDS:   
            console.log('data :',JSON.stringify(action.payload));
            return {
                ...state,
                ...action.payload
            }

        case practiceActions.ANSWER:
            let ri=state.current_round_index;
            let qi=state.current_question_index;

            console.log('ri:',ri);
            console.log('qi:',qi);
            console.log('rounds :',state.rounds)

            let total_question= 
                    ri===1?
                        state.rounds[1].questions.length
                        :
                        state.rounds[ri].length;
            console.log('total question :',total_question);


            if (qi===total_question-1){
                qi=0,
                ri++
            }
            else {
                qi++;
            }
            return {
                ...state,
                current_round_index:ri,
                current_question_index:qi
            }
        default:
            return state
    }
}