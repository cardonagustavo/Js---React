import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [datos, setDatos] = useState([]);
  const cargarDatos = (nuevoComentario)=>{
      setDatos([...datos, nuevoComentario]);
  };

  return (
    <>
      <Form enviarFormulario={cargarDatos}/>
      <List datos={datos}/>
    </>
  )
}

export default App
