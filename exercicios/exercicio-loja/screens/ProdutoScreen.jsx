import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView style={{ margin: 8 }}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Paragraph>Preço: {produto.price} USD</Paragraph>
          <Paragraph>Marca: {produto.brand}</Paragraph>
          <Paragraph>Categoria: {produto.category}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
