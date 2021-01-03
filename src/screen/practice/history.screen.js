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
import ResultComponent from '../../component/result.component';
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
                        <ResultComponent result={item}/>
                    )}
                />
            </View>
        )
    }
}