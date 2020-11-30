import React,{Component} from 'react';

import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class ButtonComponent extends Component{
    render(){
        return (
            <TouchableOpacity 
                style={{
                    width:320,height:50,backgroundColor:this.props.background,
                    borderRadius:25,justifyContent:'center',alignItems:'center',
                    marginTop:this.props.margin_top!==undefined?this.props.margin_top:20
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