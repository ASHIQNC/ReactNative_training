import React from "react";
import { Button,Text,TouchableOpacity,StyleSheet, View } from "react-native";

export const ButtonClick =()=>{

    return(
        <View>
         <Button title="Click" onPress={()=>{alert("hello 1")}}></Button>

         <TouchableOpacity style={styles.button}  onPress={()=>{alert("hello2")}}>
             <Text style={{color:"#fff", fontSize:18}} >Click2</Text>
         </TouchableOpacity>

         </View>

    )

}

const styles=StyleSheet.create({
    button:{
        alignSelf:"center",
        backgroundColor:"red",
        paddingHorizontal:10,
        paddingVertical:10

    }
})