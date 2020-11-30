import firebaseHelper from '../../util/firebase.helper'
import {practiceActions} from '../action_constant'

export const retrieveAllRounds=()=>{
  //  console.log('called action : retrieveAllRounds')

    return async (dispatch)=>{
        let rounds=await firebaseHelper.retrieveAllRounds();
        let round1=rounds[0];
        round1[0].question.state='current';
        let e={
            rounds:rounds,
            current_round_index:0,
            current_question_index:0
        }
        dispatch({
            type:practiceActions.RETRIEVE_ALL_ROUNDS,
            payload:e
        })
    }

}

export const answer=(answer_index)=>{
    console.log('choose option :',answer_index);
    return {
        type:practiceActions.ANSWER,
        payload:answer_index
    }
}