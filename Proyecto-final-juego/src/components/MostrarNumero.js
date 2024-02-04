// MostrarNumero.js
import React from 'react';

const MostrarNumero = ({ numero }) => {
  return (
    <p style={styles.texto}>Número generado: {numero}</p>
  );
};

const styles = {
  texto: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default MostrarNumero;
