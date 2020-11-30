import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text,
    FlatList
} from 'react-native';
import AllRoundSumComponent from '../../component/all_round_sum.component';
import ButtonComponent from '../../component/button.component';
import RoundScoreComponent from '../../component/round_score.component';
import { ROUNDS } from '../../resource/const';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN, WHITE } from '../../resource/palette';
const result={
    rounds:[80,80,-1,-1],
    score:240
}

class ResultItem extends Component{
    render(){
        const result=this.props.result;
        return (
            <View style={{width:320,marginHorizontal:20,marginTop:30,flexDirection:'column',alignItems:'center'}}>
                {
                    result.time!==undefined?
                    <Text style={{fontSize:18,color:SILVER}}>
                        {
                            result.time
                        }
                    </Text>
                    :
                    null
                }

                <AllRoundSumComponent score={result.score}/>

                <FlatList 
                    data={result.rounds}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item,index})=>(
                        <RoundScoreComponent round={ROUNDS[index]} score={item}/>
                    )}
                />
            </View>
        )
    }
}
export default class PracticeResultScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    KẾT QUẢ
                </Text>
                
                <ResultItem result={result}/>

                <ButtonComponent label='TIẾP' text_color={WHITE} background={GREEN} 
                    onPress={()=>this.props.navigation.navigate('home')}
                    margin_top={120}/>
                
            </View>
        )
    }
}