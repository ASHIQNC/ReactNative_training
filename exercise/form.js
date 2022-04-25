import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export const Form = () => {
    const [name, setName] = useState('')
    return (

        <View style={styles.container}>
            <Text style={styles.label}>What is you name?</Text>
            <TextInput onChangeText={(text) => setName(text)} value={name} style={styles.input} placeholder="enter the name" placeholderTextColor="red" />
            <Button title="hello" onPress={
                () => {
                    alert(`Hello ${name}`);
                    setName("");
                }

            } />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    container: {
        padding: 30
    },
    input: {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    }
})