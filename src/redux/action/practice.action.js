
import firebase from '../../util/firebase'
import {practiceActions} from '../action_constant'

export const getPracticeRounds=()=>{

    return async (dispatch)=>{
        let rounds=await firebase.getPracticeRounds();

        dispatch({
            type:practiceActions.GET_PRACTICE_ROUNDS,
            payload:{rounds}
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

export const chooseRound4Questions=(arr)=>{
    console.log('chooseRound4Questions :',arr);
    return async (dispatch)=>{
        let round4=await firebase.getRound4(arr);

        dispatch({
            type:practiceActions.CHOOSE_ROUND4_QUESTIONS,
            payload:{round4}
        })
    }
}