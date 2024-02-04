// BotonGenerarNumero.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const BotonGenerarNumero = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.textoBoton}>Generar número aleatorio</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BotonGenerarNumero;
