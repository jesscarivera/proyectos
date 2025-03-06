import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      
      {/* Botón Ir a Ahorros */}
      <View style={styles.buttonContainer}>
        <Button title="⋆｡‧˚ʚ Ahorros ɞ˚‧｡⋆" color="#FF7BAC" onPress={() => navigation.navigate('Ahorros')} />
      </View>

      {/* Botón Ir a Perfil */}
      <View style={styles.buttonContainer}>
        <Button title="⋆｡‧˚ʚ Perfil ɞ˚‧｡⋆" color="#FF7BAC" onPress={() => navigation.navigate('Perfil')} />
      </View>

      {/* Botón Ir a Configuración */}
      <View style={styles.buttonContainer}>
        <Button title="⋆｡‧˚ʚ Configuracion ɞ˚‧｡⋆" color="#FF7BAC" onPress={() => navigation.navigate('Configuracion')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F8E5E8', 
    padding: 20
  },
  title: {
    fontSize: 28, 
    color: '#FF4C9C', 
    marginBottom: 30, 
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginVertical: 10, // Espacio entre los botones
    width: '80%' // Asegura que los botones no ocupen toda la pantalla
  }
});

export default HomeScreen;
