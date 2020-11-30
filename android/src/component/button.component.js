import React,{Component} from 'react';

import {
    Text,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonComponent extends Component{
    render(){
        return (
            <TouchableOpacity 
                style={{
                    width:320,height:50,backgroundColor:this.props.background,
                    borderRadius:25,justifyContent:'center',alignItems:'center'
                }}
                onPress={this.props.onPress}
                >
                <Text style={{fontSize:20,color:this.props.text_color}}>
                    {
                        this.props.label
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}