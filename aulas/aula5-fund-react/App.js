import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      
      <PrimeiroComponente />
      <SegundoComponente /> 
      <JavaScriptComponente />
  
      <Perfil 
        nome = "Leonardo"
        sobrenome = "Soares"
        Idade = {23}
      />
      <Perfil 
        nome = "Karoline"
        sobrenome = "Silva"
        Idade = {18}
      />
      <Perfil 
        nome = "Geovanna"
        sobrenome = "Sousa"
        Idade = {20}
      />

      <StatusBar style="auto" />
    </View>
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
