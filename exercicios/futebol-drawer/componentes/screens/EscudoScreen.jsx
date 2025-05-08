import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={time.nome} />
        <Card.Content>
          <Image source={{ uri: time.escudo }} style={styles.escudo} />
          <Text style={styles.info}>Fundação: {time.fundacao}</Text>
          <Text style={styles.info}>Estádio: {time.estadio}</Text>
          <Text style={styles.info}>Mascote: {time.mascote}</Text>
          <Text style={styles.info}>Cores: {time.cores.join(" e ")}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  escudo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 16,
  },
  info: {
    marginTop: 8,
    fontSize: 16,
  },
});
