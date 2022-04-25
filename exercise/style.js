import React from "react";
import {View,StyleSheet,Text} from 'react-native'

const Square=({text,backgroundColor})=>{
    return(
    <View style={[styles.box,{backgroundColor:backgroundColor||"blue"}]}>
        <Text>{text}</Text>
    </View>
    )
}

export const StylePage=()=>{
    
  return(
    <View style={styles.container}>
        
        <Square text="square1" />
        <Square text="square2" backgroundColor="yellow" />
        <Square text="square3" backgroundColor="red" />

         
        {/* <View style={styles.box}>
            <Text>Square1</Text>
        </View> */}

        {/* we are overriding the style. in this way we change the style of perticular box,without re-styling it */}

        {/* <View style={[styles.box,{backgroundColor:"yellow"}]}>
            <Text>Square2</Text>
        </View> */}

        {/* <View style={[styles.box,{backgroundColor:"red"}]}>
            <Text>Square3</Text>
        </View> */}


    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingVertical:300,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
        
        
    },
    box:{
        backgroundColor:'blue',
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center'
        
        
    }
})