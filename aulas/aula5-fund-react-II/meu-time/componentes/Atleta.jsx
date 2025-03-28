import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {
    const {nome, idade, numero, imagem} = props
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Número: {numero}</Text>

      <Image
        source={{uri: imagem}}

        style={{
            height:200,
            width: 70
        }}
      ></Image>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        borderWidth: 10,
        padding: 5,
        alignItems: "center"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
    }
})