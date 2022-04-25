import React,{useState} from "react";
import {Text,View,Button,StyleSheet} from 'react-native'

export const StateProps=()=>{
    const [count,setCount]=useState(0)
    return(

        <View >
            <Text >The button pressed times:{count}</Text>
            {/* <Button title="count" onPress={()=>{setCount(count+1)}}></Button> */}
             {/* if we want to show count inside the button do the following steps */}
            <Button title={`button pressed ${count} times`} onPress={()=>{setCount(count+1)}}></Button>
    
            <Button style={styles.clear} title="clear" onPress={()=>{setCount(0)}}></Button>
        </View>
        
    )
}

const styles=StyleSheet.create({

    clear:{
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:10,
        color:'red'
    }
})
