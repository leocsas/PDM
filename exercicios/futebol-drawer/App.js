import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EscudoScreen from './componentes/screens/EscudoScreen';
import JogadoresScreen from './componentes/screens/JogadoresScreen';
import TitulosScreen from './componentes/screens/TituloScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Provider as PaperProvider } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Escudo"
          screenOptions={({ route }) => ({
            headerShown: true,
            drawerIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Escudo') {
                iconName = focused ? 'shield' : 'shield-outline';
              } else if (route.name === 'Jogadores') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'Títulos') {
                iconName = focused ? 'trophy' : 'trophy-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Escudo" component={EscudoScreen} />
          <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
          <Drawer.Screen name="Títulos" component={TitulosScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
