import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native'

export const Profile = ({addSubject}) => {
  const [subject,setSubject]=useState()
  return (
    <>
      <View style={styles.container}>

        <Image

          resizeMode="contain"
          style={styles.image}
          source={{ uri: "https://image.shutterstock.com/image-illustration/little-cartoon-character-boy-points-600w-1511969201.jpg" }}
        
        ></Image>

        <TouchableOpacity onPress={() => { alert("hello") }}>
          <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }} >Hi</Text>
        </TouchableOpacity>

        <View>
        
        <TextInput 
         style={styles.inputText}
         onChangeText={setSubject}
         placeholder="Enter you name"
         placeholderTextColor="red"
         value={subject}   //we can make the text field controlled by doing this.that is we can clear the value when we press submit
         
        >

        </TextInput>
        <View style={styles.button}>

        <Button  title="add"   onPress={()=>{addSubject(subject),alert(`hello ${subject}`),setSubject("")}}></Button>

        </View>
        
      </View>

      </View>

     

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center"


  },
  title: {
    fontSize: 30,
    fontWeight: "bold"

  },
  button:{
    position:'relative',
    top:15,
    paddingVertical:10,
    paddingHorizontal:30,
    justifyContent:"center"
  
  },
  inputText: {
    borderRadius:50,
    marginRight: 10,
    width:200,
    height:50,
    borderColor: 'gray',
    borderWidth: 1,
    position:'relative',
    left:15
    
  },
  image: {

    width: 150,
    height: 150,
    borderRadius: 125,
    borderWidth: 5,
    marginBottom: 20,
   
    paddingVertical: 60


  }
})