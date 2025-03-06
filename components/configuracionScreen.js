import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Usamos Ionicons de Expo

const ConfiguracionScreen = () => {

  // Función para mostrar alertas según la opción seleccionada
  const showAlert = (message) => {
    Alert.alert('Configuración', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>

      {/* Opción: Cambiar Tema */}
      <TouchableOpacity style={styles.option} onPress={() => showAlert('Cambiar tema seleccionado')}>
        <Ionicons name="color-palette" size={30} color="#FF4C9C" />
        <Text style={styles.optionText}>Cambiar Tema</Text>
      </TouchableOpacity>

      {/* Opción: Cambiar Idioma */}
      <TouchableOpacity style={styles.option} onPress={() => showAlert('Cambiar idioma seleccionado')}>
        <Ionicons name="language" size={30} color="#FF4C9C" />
        <Text style={styles.optionText}>Cambiar Idioma</Text>
      </TouchableOpacity>

      {/* Opción: Notificaciones */}
      <TouchableOpacity style={styles.option} onPress={() => showAlert('Configurar notificaciones seleccionadas')}>
        <Ionicons name="notifications" size={30} color="#FF4C9C" />
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
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
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 15, // Aumenté el margen entre las opciones
    padding: 10, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 8, 
    width: '100%',
    elevation: 3, // Sombra para darle un toque de profundidad
  },
  optionText: { 
    marginLeft: 15, // Mayor espacio entre el ícono y el texto
    fontSize: 18, 
    color: '#FF4C9C' 
  },
});

export default ConfiguracionScreen;
