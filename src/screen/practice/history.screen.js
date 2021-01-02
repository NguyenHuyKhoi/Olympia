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
import { ROUNDS } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN } from '../../util/palette';
const results=[
    {
        time:'8h45 - 02/20/2020',
        rounds:[80,80,30,50],
        score:240
    },
    {
        time:'8h45 - 02/20/2020',
        rounds:[80,80,30,50],
        score:240
    },
    {
        time:'8h45 - 02/20/2020',
        rounds:[80,80,30,50],
        score:240
    },
    {
        time:'8h45 - 02/20/2020',
        rounds:[80,80,30,50],
        score:240
    }
]

class ResultItem extends Component{
    render(){
        const result=this.props.result;
        return (
            <View style={{width:320,marginHorizontal:20,marginTop:30,flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize:18,color:SILVER}}>
                    {
                        result.time
                    }
                </Text>
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
export default class PracticeHistoryScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>
     

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    LỊCH SỬ
                </Text>


                <FlatList 
                    data={results}
                    keyExtractor={(item,index)=>''+index}
                    renderItem={({item})=>(
                        <ResultItem result={item}/>
                    )}
                />
            </View>
        )
    }
}