import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Leonardo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 20,
        borderWidth: 10,
        borderColor: "silver"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        alignItems: 'center',
        justifyContent: "flex",
        color: "silver"
    }
})