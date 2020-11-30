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
        const metadata=this.props.metadata;
        const question=this.props.question;
        const label=metadata.category!==undefined?metadata.category:'';
        const content=question.content!==undefined?question.content:'';
        const image=question.image!==undefined?question.image:'';
        const score=metadata.score!==undefined?metadata.score:'';
       // console.log('question :',question);
        return (
           
            <View style={{width: 320,height:250,flexDirection:'column',marginTop: 20}}>
                {
                    label!==''?
                    <Text style={{fontSize:15,fontStyle:'italic',color:SILVER}}>
                        {label}
                    </Text>
                    :
                    null
                }  
                <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                    {
                        content!==''?
                        <Text style={{fontSize: 18,color:SILVER}}>
                            {content}
                        </Text>
                        :
                        null
                    }
                    {
                        image!==''?
                        <Image source={{
                            uri: image,
                          }} style={{height:content!==''?165:200,width:content!==''?240:300,marginTop: 10}} 
                        />
                        :
                        null
                    }
                </View>
            </View>
 



        )
    }
}