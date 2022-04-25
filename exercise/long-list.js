import React, { useState } from "react";
import { Text, View, StyleSheet,FlatList } from 'react-native'

export const LongList=()=>{

    
    return(
        
        
            <FlatList
              data={PEOPLE}
              keyExtractor={item=>`${item.name.first}-${item.name.last}`}
              renderItem={({item})=>{
                  return(
                    <>
                
                  <View style={styles.row}>
                      <Text style={styles.name}>
                      {item.name.first} {item.name.last}
                      </Text>

                  </View>  
                  <View style={styles.seperator}></View>
                
                  </>
                  )
              

              }}
            
             
            
            />

          


    )
} 

 const styles=StyleSheet.create({

    row:{
        padding:10
    },
    name:{
        fontSize:15
    },
    seperator:{
        backgroundColor:"rgba(0,0,0,0.5)",
        height:1

    }
})




const PEOPLE = [
    {
      name: {
        title: "Ms",
        first: "Maeva",
        last: "Scott",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maëlle",
        last: "Henry",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mohamoud",
        last: "Faaij",
      },
    },
    {
      name: {
        title: "Monsieur",
        first: "Carmelo",
        last: "Meunier",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Peyton",
        last: "Garcia",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Godofreda",
        last: "Caldeira",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Kristin",
        last: "White",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Xênia",
        last: "da Cruz",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Christl",
        last: "Schwinn",
      },
    },
    {
      name: {
        title: "Mademoiselle",
        first: "Édith",
        last: "Hubert",
      },
    },
    {
      name: {
        title: "Monsieur",
        first: "Tobias",
        last: "David",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Väinö",
        last: "Tervo",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Susanne",
        last: "Peters",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Ariane",
        last: "Gagnon",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Warrens",
        last: "Graham",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Corey",
        last: "Price",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Milian",
        last: "Tufte",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Johan",
        last: "Renard",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Brand",
        last: "Van Meijl",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Kasper",
        last: "Kivela",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Harley",
        last: "Martin",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Aapo",
        last: "Niemela",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Carol",
        last: "Williams",
      },
    },
    {
      name: {
        title: "Miss",
        first: "تارا",
        last: "حسینی",
      },
    },
    {
      name: {
        title: "Mr",
        first: "محمدامين",
        last: "سهيلي راد",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Mauritz",
        last: "Musch",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Andrea",
        last: "Austin",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Murat",
        last: "Kutlay",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Nanneke",
        last: "Ermers",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Jayden",
        last: "Anderson",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Nejla",
        last: "Van Riet",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Heather",
        last: "Hudson",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Maria",
        last: "Wright",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Edelmira",
        last: "Nogueira",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Concepcion",
        last: "Santana",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Andrea",
        last: "Knight",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Julie",
        last: "Pedersen",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Renata",
        last: "Kautz",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Samanta",
        last: "Groenveld",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "محیا",
        last: "سلطانی نژاد",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Apolline",
        last: "David",
      },
    },
    {
      name: {
        title: "Mr",
        first: "نيما",
        last: "کوتی",
      },
    },
    {
      name: {
        title: "Mr",
        first: "مهدي",
        last: "پارسا",
      },
    },

  ];
  