import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../resource/palette';

// quesion ={
//     label ,question, image,score ;
// }


export default class QuestionComponent extends Component{

    defineColor=(item)=>{
        switch (item.state){
            case 'correct': return GREEN;
            case 'wrong'  : return RED;
            case 'current': return WHITE;
            case 'remain' : return SILVER;
        }
    }

    render(){
        const question=this.props.question;
        const label=question.label!==undefined?question.label:'';
        const content=question.content!==undefined?question.content:'';
        const image=question.image!==undefined?question.image:'';
        const score=question.score!==undefined?question.score:'';
        console.log('question :',question);
        return (
           
            <View style={{width: 320,height:260,flexDirection:'column',backgroundColor:'#947523'}}>
                {
                    label!==''?
                    <Text style={{fontSize:17,fontStyle:'italic',color:SILVER}}>
                        {label}
                    </Text>
                    :
                    null
                }
                <View style={{flex:1,flexDirection:'column',alignItems:'center',marginTop: 15}}>
                    {
                        content!==''?
                        <Text style={{fontSize: 20,color:SILVER}}>
                            {content}
                        </Text>
                        :
                        null
                    }
                    {
                        image!==''?
                        <Image source={{
                            uri: image,
                          }} style={{height:content!==''?180:200,width:content!==''?260:300,marginTop: 10}} 
                        />
                        :
                        null
                    }
                </View>
            </View>
 



        )
    }
}