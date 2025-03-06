import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>₊˚ʚ Perfil ₊˚✧ﾟ.</Text>
      <Image source={require('../assets/_ (1).jpeg')} style={styles.profileImage} />
      <Text style={styles.info}>Jessica Rivera ★ ˙🍓 ̟!!</Text>
      <Text style={styles.info}>19 años</Text>
      <Text style={styles.info}>jessicarivera@gmail.com</Text>
      <Button title="Regresar" color="#FF7BAC" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8E5E8', padding: 20 },
  title: { fontSize: 28, color: '#FF4C9C', marginBottom: 20, fontWeight: 'bold' },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  info: { fontSize: 18, color: '#FF4C9C', marginBottom: 10 },
});

export default PerfilScreen;
