import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles =  StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowRadius: 6,
        shadowOffset:{width:0, height:2},
        shadowOpacity:.26,
        backgroundColor:'white',
        elevation: 5,
        padding:20,
        borderRadius:10
    }
});
