import database from '@react-native-firebase/database';
import { toArray,randomItem,shuffle } from './helper';

class FirebaseHelper{
    constructor(){
        this.dbRef=database().ref();
    }

    get=async (path)=>{
        console.log('firebase get :',path)
        let obj=null;

        await this.dbRef.child(path).once('value')
            .then(snapshot=>obj=snapshot.val());
        return obj;
    }

    set=async (path,data)=>{
        console.log('firebase set :',path,data)
        await this.dbRef.child(path).set(data);
    };

    update=async (path,data)=>{
        console.log('firebase update :',path,data)
        await this.dbRef.child(path).update(data);
    };

    //path : parent dir :
    push=async (path,data)=>{
        console.log('firebase push :',path,data)
        let key=(await this.dbRef.child(path).push()).key;

        console.log('firebase push key:',key)
        await this.dbRef.child(path+key).set({
            ...data,
            id:key
        });

        return key
    };
    


    getRound1=async ()=>{
        let round1s= await this.get('/data_bank/round1');
        let res= round1s.map((item)=>{
            return {
                category:item.category,
                code:item.code,
                ...randomItem(toArray(item.questions))
            }
        }
        )

        console.log('firebase getRound1 :',res)

        return res;
       
    }

    getRound2=async ()=>{
        let round2s=await this.get('/data_bank/round2');
        let res=randomItem(round2s);

        console.log('firebase getRound2 :',res)
        return res;
    }

    getRound3=async ()=>{
        let round3s= await this.get('/data_bank/round3');
        let res= round3s.map((item)=>{
            return {
                category:item.category,
                code:item.code,
                ...randomItem(toArray(item.questions))
            }
        }
        )
        console.log('firebase getRound3 :',res)
        return res;
    }

    //arr : number question of each type [easy,medium,hard]
    getRound4=async (arr)=>{
        let round4s=await this.get('/data_bank/round4');
        let res=[];
        arr.map((item,index)=>{
            let type=round4s[index];
            let questions=shuffle(toArray(type.questions));
            for (let i=0;i<item;i++){
                res.push({
                    category:type.category,
                    code:type.code,
                    ...questions[i]
                })
            }
        }
        );
        console.log('firebase getRound4 :',res)
        return res;
    }
    


    getPracticeRounds=async ()=>{
        console.log('firebase on getPracticeRounds begin :')
        let round1=await this.getRound1();
        let round2=await this.getRound2();
        let round3=await this.getRound3();
        let round4=await this.getRound4([1,1,1]);

        let rounds=[round1,round2,round3,round4]
        console.log('firebase on getPracticeRounds end :',rounds)
        return rounds
    }
}

const firebaseHelper=new FirebaseHelper();
export default firebaseHelper;