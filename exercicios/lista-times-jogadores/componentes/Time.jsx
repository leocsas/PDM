import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores, numero } = props;

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} subtitle={anoFundacao} />
      <Card.Content>
        <Text>Mascote: {mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              imagem={item.imagem}
              numero={item.numero}
            />
          )}
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});