import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filmes(props) {

    const {nome, ano, diretor, tipo, capa} = props

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>{nome}</Text>
      
      
      <Image
        source= {{
            uri: capa
        }}
        style= {{
            height: 300,
            width: 200,
            marginTop: 25
        }}
      ></Image>

      <Text style={styles.texto}>Ano de lançamento: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Gênero: {tipo}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 35,
      marginLeft: 55,
      marginRight: 55,
      marginTop: 30,
      flex: 1,
      alignItems: "center"
  },
  texto: {
      fontSize: 14,
      fontWeight: 400,
      color: "white",
      fontStyle: 'italic'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 500,
    color: "white",
}
})
