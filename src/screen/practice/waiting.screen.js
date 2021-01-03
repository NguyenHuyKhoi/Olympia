import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text
} from 'react-native';
import ButtonComponent from '../../component/button.component';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN } from '../../util/palette';

import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'
import { ROUNDS } from '../../util/constants';

class PracticeWaitingScreen extends Component{

    render(){
        const {cri,questions_state}=this.props.practice;
        const round=ROUNDS[cri]

        console.log('Waiting Screen :cri,questions_state:',cri,questions_state)
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:20}}>
     
                <Image source={LOGO} resizeMethod='resize' style={{width: 120,height:120,marginTop: 40}}/>
                <Text style={{fontSize:22,color:SILVER,marginTop: 15}}>
                    {'Vòng '+round.index}
                </Text>
                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 15}}>
                    {round.name}
                </Text>

				<ButtonComponent label='Vào' text_color={SILVER} background={GREEN} 
						onPress={()=>{
                            if (cri!==3)
                                this.props.navigation.navigate('practice_round'+(cri+1))
                            else 
                                this.props.navigation.navigate('practice_round4_setup')
                        }}
                        margin_top={250}/>
                
            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeWaitingScreen)
