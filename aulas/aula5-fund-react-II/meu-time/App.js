import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import Atleta from './componentes/Atleta';


export default function App() {

  const listaAtletas = [
  {
    nome: "Wesley",
    idade: 27,
    numero: 10,
    imagem: "https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-athletic-man-is-jogging-man-athlete-race-photo-image_23750130.jpg'"
  },
  {
    nome: "Wesley",
    idade: 27,
    numero: 10,
    imagem: "https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-athletic-man-is-jogging-man-athlete-race-photo-image_23750130.jpg'"
  },
  ]

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        listaAtletas.map(
          atleta => {
            return (
              <Atleta
                nome={atleta.nome}
                idade={atleta.idade}
                numero={atleta.numero}
                imagem={atleta.imagem}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
