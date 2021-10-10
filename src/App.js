import React, { Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let initCitas = JSON.parse(localStorage.getItem('citas'));
  if(!initCitas) {
    initCitas = [];
  }

  const [citas, setCitas] = useState(initCitas);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas ? citas : []));
  }, [citas]);

  const addCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  const deleteCitaById = (id) => {
    setCitas(citas.filter((x) => x.id !== id));
  }

  const listTitle = citas.length === 0 ? 'No hay citas' : 'Administa tus citas' ;

  return (
    <Fragment>
      <h1>
        Administrador de Pacientes
      </h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              addCita={addCita}
            />
          </div>
          <div className="one-half column">
            <h2>
              {listTitle}
            </h2>
            { citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                deleteCitaById={deleteCitaById}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
