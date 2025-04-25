import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ReceitaScreen from './src/screens/ReceitaScreen';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const azulPastel = '#a3c9f1';

const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: azulPastel,
    accent: '#ffffff',
    background: '#eaf4fb',
    surface: '#ffffff',
    text: '#003366',
    placeholder: '#7da3c8',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={{ ...NavigationDefaultTheme, colors: { ...NavigationDefaultTheme.colors, background: '#eaf4fb' } }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
          <Stack.Screen name="Receita" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
