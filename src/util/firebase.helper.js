import database from '@react-native-firebase/database';
import { ROUNDS } from '../resource/const';

class FirebaseHelper{

    randomIndex=(arr)=>{
        return Math.floor(Math.random()*arr.length);
    }

    retrieveRound1=async ()=>{
        let round=[];
        for (i=0;i<ROUNDS[0].number_question;i++){
            let question;
             
            await database().ref('/data_bank/round1/'+i).once('value')
                .then(snapshot=>{
                    let e=snapshot.val();
                    let arr=e.questions;
                    // console.log('snapshot :',e)
                     console.log('round 1-question  :'+i)
                    question={
                        metadata:{
                            ...e.metadata
                        },
                        question:{
                            ...arr[this.randomIndex(arr)],
                            state:'remain',
                        }
                    }
                    round.push(question);
                })
        }

        return round;
       
    }

    retrieveRound2=async ()=>{
        let round={};
        await database().ref('/data_bank/round2').once('value')
                .then(snapshot=>{
                    let arr=snapshot.val();
                    round=arr[this.randomIndex(arr)]
                })

        console.log('round 2****** :',round);
        return round;     
    }

    chooseRound3Topic=(index)=>{
        if (index<3) return index;
        return (index+Math.floor(Math.random()*100))%3;
    }

    retrieveRound3=async ()=>{
        let round=[];
        for (i=0;i<ROUNDS[2].number_question;i++){
            let question;
             
            await database().ref('/data_bank/round3/'+this.chooseRound3Topic(i)).once('value')
                .then(snapshot=>{
                    let e=snapshot.val();
                    let arr=e.questions;
                    // console.log('snapshot :',e)
                    // console.log('metadata :',e.metadata)
                    console.log('round 3-question  :'+i)
                    question={
                        metadata:{
                            ...e.metadata
                        },
                        question:{
                            ...arr[this.randomIndex(arr)],
                            state:'remain',
                        }
                    }
                    round.push(question);
                })
        }

        return round;
       
    }

    retrieveRound4=async ()=>{
        let round=[];
        for (i=0;i<ROUNDS[3].number_question;i++){
            let question;
             
            await database().ref('/data_bank/round4/'+i).once('value')
                .then(snapshot=>{
                    let e=snapshot.val();
                    let arr=e.questions;
                    // console.log('snapshot :',e)
                    // console.log('metadata :',e.metadata)
                    console.log('round 4-question  :'+i)
                    question={
                        metadata:{
                            ...e.metadata
                            
                        },
                        question:{
                            ...arr[this.randomIndex(arr)],
                            state:'remain',
                        }
                    }
                    round.push(question);
                })
        }

        return round;
       
    }
    retrieveAllRounds=async ()=>{
        console.log('retrieveAllRounds on FirebaseHelper')
        let round1=await this.retrieveRound1();
        let round2=await this.retrieveRound2();
        let round3=await this.retrieveRound3();
        let round4=await this.retrieveRound4();

        let rounds=[round1,round2,round3,round4]
        return rounds
    }
}

const firebaseHelper=new FirebaseHelper();
export default firebaseHelper;