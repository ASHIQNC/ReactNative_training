import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, Button, } from "react-native";
import axios from "axios";

export const Api = () => {

    const [data, setData] = useState([])
    const apicall = () => {

        const url = `https://identity-staging.tllms.com/api/request_otp?phone=%2B91-9894792024`

        // const url=`https://randomuser.me/api/?results=100&inc=name`
        axios.get(url).then((res) => {
            console.log(JSON.stringify(res.data))
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }
    
    //dought

    // useEffect(()=>{
        
    //    // const url = `https://identity-staging.tllms.com/api/request_otp?phone=%2B91-9894792024`

    //      const url=`https://randomuser.me/api/?results=100&inc=name`
    //     axios.get(url).then((res) => {
    //         console.log(res.data)
    //         //setData(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // })

    return (

        <View  >
            <View style={styles.button}>
            <Button  title="click" onPress={apicall}></Button>

            </View>
            <View style={styles.title}>

            <Text>phone:{data.phone}</Text>
            <Text>created at:{data.created_at}</Text>
            <Text>updated at:{data.updated_at}</Text>
            <Text>deleted at:{data.deleted_at}</Text>
            <Text>nonce:{data.nonce}</Text>

            </View>
          


        </View>
    )
}

const styles = StyleSheet.create({
    button: {
    
        padding:20,
        paddingTop:50
    },
    title:{ 
        padding:30
    }
})
