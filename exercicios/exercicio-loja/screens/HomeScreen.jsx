import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories') // <- SUBSTITUA pela URL correta
      .then(response => {
        console.log('Categorias:', response.data);
        setCategorias(response.data); // <- DEVE ser array de objetos
        setCarregando(false);
      })
      .catch(error => {
        console.error('Erro ao buscar categorias:', error);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <View style={styles.centered}>
        <Text>Carregando categorias...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.slug} // <- usa slug como chave única
      renderItem={({ item }) => (
        <List.Item
          title={item.name} // <- Mostra o nome (string) da categoria
          onPress={() => navigation.navigate('Produtos', { categoria: item.slug })}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 16,
  },
});
