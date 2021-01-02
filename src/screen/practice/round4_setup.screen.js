import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
import ButtonComponent from '../../component/button.component';
import { STAR1, STAR2 } from '../../resource/image';
const levels=[
    {
        score:10,
        time:10
    },
    {
        score:20,
        time:15
    },
    {
        score:30,
        time:20
    },
]
import { SILVER, INDIGO_3, GRAY, GREEN, INDIGO_2, WHITE } from '../../util/palette';
class ScoreLevel extends Component {
    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onChoose}
                style={{width:90,height:40,borderRadius:10,
                    justifyContent: 'center',alignItems:'center',
                    backgroundColor:!this.props.is_picked?INDIGO_2:GREEN}}>
                <Text style={{fontSize:20,color:SILVER}}>
                    {
                        this.props.score
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}

class QuestionPackage extends Component{
    constructor(props){
        super(props);
        this.state={
            is_picked_star:false ,
            level:levels[0]
        }
    }

    pickStar=()=>{
        const e=this.state.is_picked_star;
        this.setState({
            ...this.state,
            is_picked_star:!e
        })
    }

    pickLevel=(level)=>{
        Alert.alert('hello')
        this.setState({
            ...this.state,
            level:level
        })
    }
      
    render(){
        return (
            <View style={{width:'100%',flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize:25,color:SILVER,marginTop: 25}}>
                    {
                        'Câu '+this.props.index
                    }
                </Text>

                <TouchableOpacity 
                    onPress={this.pickStar}
                    style={{position: 'absolute',top:25,right: 85}}>
                    <Image source={!this.state.is_picked_star?STAR1:STAR2} 
                        style={{width: 30,height:30,tintColor:!this.state.is_picked_star?WHITE:null}}/>
                </TouchableOpacity>

                <View style={{marginTop:20,width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                    {
                        levels.map((item,index)=>(
                            <ScoreLevel 
                                key={''+index}
                                is_picked={this.state.level.score===item.score}
                                score={item.score} 
                                onChoose={()=>this.pickLevel(item)}/>
                        ))
                    } 
                </View>
            </View>
           
        )
    }
}
export default class Round4SetupScreen extends Component{


    render(){
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:20}}>

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    CHỌN GÓI CÂU HỎI
                </Text>

                <QuestionPackage index={1}/>
                <QuestionPackage index={2}/>
                <QuestionPackage index={3}/>

                <Text style={{fontSize:25,color:SILVER,marginTop: 20}}>
                    {'Tổng : 80'}
                </Text>

                <ButtonComponent label='Vào' text_color={SILVER} background={GREEN} 
						onPress={()=>this.props.navigation.navigate('practice_round4')}
                        margin_top={30}/>

            </View>
        )
    }
}