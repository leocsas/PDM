import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './Componentes/Filmes';

export default function App() {

    const listaFilmes = [
      {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
      },
      {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://m.media-amazon.com/images/M/MV5BOWVhMTE0MjUtMjY0ZS00YzM2LTg4NTUtODM3NzkzMjZmNjAwXkEyXkFqcGc@._V1_.jpg"
      },
      {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
      },
      {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://m.media-amazon.com/images/I/61zM5j166PL._AC_UF1000,1000_QL80_.jpg"
      }
      
      ];

      const listaSeries = [
        {
        nome: "Desperate Housewives",
        ano: 2004,
        diretor: "Marc Cherry",
        temporadas: 1,
        capa: "https://m.media-amazon.com/images/I/71mG-uOrGWL._AC_UF1000,1000_QL80_.jpg"
        },
        {
        nome: "Sons of Anarchy",
        ano: 2008,
        diretor: "Kurt Sutter",
        temporadas: 7,
        capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
        }
        ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Filmes</Text>

      {
      listaFilmes.map(
        filmes => {
          return (
            <Filmes 
              nome={filmes.nome}
              ano={filmes.ano}
              diretor={filmes.diretor}
              tipo= {filmes.tipo}
              capa={filmes.capa}
            />
          )
        }
      )
    }

      <Text style={styles.titulo}>Séries</Text>

    {
      listaSeries.map(
        series => {
          return (
            <Filmes 
              nome={series.nome}
              ano={series.ano}
              diretor={series.diretor}
              tipo= {series.tipo}
              capa={series.capa}
            />
          )
        }
      )
    }

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: "center"
  },
  titulo: {
    fontSize: 35,
    fontWeight: 500,
    color: "white",
    marginTop: 65
}
});
