import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {

    const nome = "Leonardo"
    const idade = 23

    function exibirNome(){
        return nome
    }

    function checarMaiorIdade(){
        if(idade >= 18){
            return "Maior de idade"
        }
        else{
            return "Menor de idade"
        }
    }

  return (
    <View>
      <Text>JavaScript Componente</Text>
      <Text>nome: {nome}</Text>
      <Text>idade: {idade}</Text>
      <Text>nome: {exibirNome()}</Text>
      <Text>resultado: {23+31}</Text>
      <Text>Check 18+:  {checarMaiorIdade()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})