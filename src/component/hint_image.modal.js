//import from library 
import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import Modal from 'react-native-modalbox'



export default class HintImageModal extends Component{

    constructor(props){
        super(props)

    }
    open=()=>{
        this.modal.open();
    }

    close=()=>{
        this.modal.close();
    }

    render(){
        const {url}=this.props;
        return(
        
            <Modal 
                position='center' 
                ref={ref=>this.modal=ref} 
                backdrop={true}
                style={{width:'85%',height:180,borderRadius:5}}
                isOpen={false}>

                <View style={{flex:1}}>

                    <Image source={{uri:url}} style={{flex:1}}/>


                </View>
                
        </Modal>

              
        )
        }
}
