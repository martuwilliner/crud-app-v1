import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";


function App() {
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <hr/>
      <CrudApi/>
      <hr/>
      {/* <CrudApp/> */}
      <hr/>
    </>
  );
}

export default App;
