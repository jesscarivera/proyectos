import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AhorrosScreen from './components/AhorrosScreen';
import PerfilScreen from './components/perfilScreen';
import ConfiguracionScreen from './components/configuracionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ahorros" component={AhorrosScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
