import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { ButtonClick } from "./capturetabs";


export const Helloworld = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={{ color: "white" }}>Hello world</Text>
                <View style={styles.button}>
                    <ButtonClick />
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "blue",
        height: "100%",
        alignItems:"center",
        justifyContent: "center"
    },
    button:{
        width:100,
        height:100,
        textAlign:"center",
        justifyContent:"center"
    }



})