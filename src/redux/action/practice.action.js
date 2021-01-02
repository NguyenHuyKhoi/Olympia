
import { INITIAL_ROUND } from '../../util/constants'
import firebase from '../../util/firebase'
import {practiceActions} from '../action_constant'

export const getPracticeRounds=()=>{
      console.log('called action : getPracticeRounds')

    return async (dispatch)=>{
        let rounds=await firebase.getPracticeRounds();

        let e={
            rounds,
            cri:INITIAL_ROUND,
            cqi:0,
            questions_state:['current']
        };

        dispatch({
            type:practiceActions.GET_PRACTICE_ROUNDS,
            payload:e
        })
    }

}

export const answer=(is_correct)=>{
    console.log('choose option :',is_correct);
    return {
        type:practiceActions.ANSWER,
        payload:{is_correct}
    }
}