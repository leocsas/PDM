import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import ListaProdutosScreen from './screens/ListaProdutosScreen';
import ProdutoScreen from './screens/ProdutoScreen';

const Stack = createStackNavigator();

const temaPersonalizado = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Roxo padrão do botão "Comprar"
  },
};

export default function App() {
  return (
    <PaperProvider theme={temaPersonalizado}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Produtos" component={ListaProdutosScreen} />
          <Stack.Screen name="Detalhes" component={ProdutoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
