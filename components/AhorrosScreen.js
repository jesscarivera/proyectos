import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const AhorrosScreen = ({ navigation }) => {
  const [ahorro, setAhorro] = useState(0);

  const incrementarAhorro = () => {
    setAhorro(ahorro + 10);
  };

  const resetearAhorro = () => {
    setAhorro(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>𐔌 . ⋮ Ahorros .ᐟ ֹ ₊ ꒱</Text>
      <Text style={styles.counter}>Ahorro: ${ahorro}</Text>

      {/* Botón Sumar 10 */}
      <View style={styles.buttonContainer}>
        <Button title="Sumar 10" color="#FF7BAC" onPress={incrementarAhorro} />
      </View>

      {/* Botón Resetear Ahorro */}
      <View style={styles.buttonContainer}>
        <Button title="Resetear Ahorro" color="#FF7BAC" onPress={resetearAhorro} />
      </View>

      {/* Botón Regresar */}
      <View style={styles.buttonContainer}>
        <Button title="Regresar" color="#FF7BAC" onPress={() => navigation.goBack()} />
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
  counter: {
    fontSize: 36, 
    color: '#FF4C9C', 
    marginBottom: 20
  },
  buttonContainer: {
    marginVertical: 10, // Espacio entre los botones
    width: '80%' // Asegura que los botones no ocupen toda la pantalla
  }
});

export default AhorrosScreen;
