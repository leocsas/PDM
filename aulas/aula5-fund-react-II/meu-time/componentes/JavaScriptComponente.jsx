import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    const nome = 'Leonardo'
    const idade = 23

    function ChecarIdade(){
        console.log("Chamou função chamar ChecarIdade")
        if (idade => 18){
            return "Maior de idade"
        }
        else {
            return "Maior de idade"
        }

        function alerta(){
            console.log("Clicou no botão.")
            alert("Clicou no botão.")
        }
    }


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>JavaScripit Componente</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Idade + 40 anos: {idade + 40}</Text>
      <Text style={styles.texto}>Idade +18: {ChecarIdade()}</Text>

      <button title='Enviar' onPress={alerta}></button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "silver",
        padding: 20,
        borderWidth: 10,
        borderColor: "green"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        alignItems: 'center',
        justifyContent: "flex",
        color: "green"
    }
})