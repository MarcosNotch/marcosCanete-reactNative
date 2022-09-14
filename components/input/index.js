
import {StyleSheet, View, TextInput,Button, TouchableOpacity, Text, Keyboard} from 'react-native';

import { useState, useRef } from 'react';


const styles = StyleSheet.create({
    input: {
      borderBottomColor: "#06bcee",
      borderBottomWidth: 1,
      height: 50,
      marginBottom: 10,
      width: '60%',
      color: "blue",
      marginRight: 50,
      color: "#ffff"
        
    },
    inputContainer:{
        flex: 1,
        flexDirection: "row",
        height: 50,
        marginRight: 50,
        marginLeft: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },

    appButtonContainer: {
        backgroundColor: "#003049",
        borderRadius: 10,
        width: "40%",
        height: 40,
        justifyContent:"center",
      },
      appButtonText: {
        fontSize: 12,
        color: "#fdf0d5",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center"
      }
  });


export default function InputList({handleChangeText, task, limpiarTexto}){

    
  let referencia = useRef(null)

  return (
      <View style={styles.inputContainer}>
        <TextInput ref={referencia} style={styles.input} value={task} onChangeText={handleChangeText}/>
        <TouchableOpacity onPress={limpiarTexto} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
)

} 