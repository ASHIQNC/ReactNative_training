import React from "react";
import { TouchableOpacity,Text } from "react-native";

//  object destructuring
const Button =({text,onPress,buttonStyle})=>{
    return(
     
    <TouchableOpacity style={{
      backgroundColor:"yellow",
      alignSelf:"center",
      marginVertical:15,
      paddingVertical:10,
      paddingHorizontal:10,
      ...buttonStyle   //spread operator.were ever this buttonstyle is called apart from above style this button style also work
    }} 
    onPress={onPress}>

    <Text>{text}</Text>
    </TouchableOpacity>
    )

}

 
export const CustomComponent =()=>{
   
    return(
        <>
        <Button text="say hello" onPress={()=>{alert("say hello")}}></Button>
        <Button text="say goodby" onPress={()=>{alert("say goodby")}} buttonStyle={{
            backgroundColor:"red"
        }}></Button>
        
        </>
    )
}