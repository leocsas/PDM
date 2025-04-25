import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Button, Title, Paragraph, useTheme, Divider } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <View style={styles.content}>
        <Title style={[styles.title, { color: colors.primary }]}>{receita.nome}</Title>
        <Paragraph style={styles.subtext}>⏱ Tempo: {receita.tempoPreparo} | 👨‍🍳 Porções: {receita.porcoes}</Paragraph>

        <Divider style={styles.divider} />

        <Title style={styles.sectionTitle}>Ingredientes:</Title>
        {receita.ingredientes.map((item, index) => (
          <Text key={index} style={styles.listItem}>• {item}</Text>
        ))}

        <Divider style={styles.divider} />

        <Title style={styles.sectionTitle}>Modo de Preparo:</Title>
        {receita.modoPreparo.map((item, index) => (
          <Text key={index} style={styles.listItem}>{item}</Text>
        ))}

        <Button
          mode="contained"
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 4,
  },
  subtext: {
    marginBottom: 12,
    color: '#666',
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    marginVertical: 2,
  },
  button: {
    marginTop: 24,
    borderRadius: 10,
  },
  divider: {
    marginVertical: 10,
  },
});
