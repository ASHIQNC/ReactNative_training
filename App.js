import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Helloworld } from './exercise/helloworld';
import { CustomComponent } from './exercise/customcomponent';
import { StateProps } from './exercise/state-props'
import { StylePage } from './exercise/style';
import { Profile } from './exercise/image';
import { Form } from './exercise/form';
import { LongList } from './exercise/long-list';
import { Api } from './exercise/apicall';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState()
  

  return (

    <SafeAreaView>

      <View>
        {/* <Helloworld /> */}
        {/* <CustomComponent /> */}
        {/* <StateProps /> */}

        {/* <StylePage /> */}
        
        <View style={styles.heading}>
          <Text style={styles.text}>Welcome To My Profile</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20 }}><Text >my name is {currentSubject}</Text></View>

        <Profile addSubject={setCurrentSubject} />

      {/* inputing text */}
        {/* <Form/> */}

        {/* longlist */}

        {/* <LongList />
       */}
      {/* <Api /> */}

      </View>
    </SafeAreaView>
  );



}

const styles = StyleSheet.create({
  container: {
  
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  heading: {
    backgroundColor: 'blue',
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop:20

  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
