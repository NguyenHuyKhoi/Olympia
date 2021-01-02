import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { GREEN, RED, SILVER, WHITE } from '../util/palette';

// quesion ={
//     label ,question, image,score ;
// }


export default class QuestionComponent extends Component{


    render(){
      

        const {category,content,answers,image,video}=this.props.question
        return (
           
            <View style={{width: '100%',height:'100%',flexDirection:'column'}}>
                {
                    category!==undefined?
                    <Text style={{fontSize:15,fontStyle:'italic',color:SILVER}}>
                        {category}
                    </Text>
                    :
                    null
                }  
                <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                    {
                        content!==undefined?
                        <Text style={{fontSize: 18,color:SILVER}}>
                            {content}
                        </Text>
                        :
                        null
                    }
                    {
                        image!==undefined?
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