import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

const Formulario = ({ addCita }) => {

  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cita.mascota.trim() === '' || cita.propietario.trim() === '' || cita.fecha.trim() === ''
      || cita.hora.trim() === '' || cita.sintomas.trim() === ''){
      setError(true);
      return;
    }
    setError(false);
    cita.id = uuidv4();
    addCita(cita);
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  }

  return(
    <Fragment>
      <h2>
        Crear Cita
      </h2>
      { error
        ?
        <p className="alerta-error">Todos los campos son obligatorios</p>
        :
        null
      }
      <form
        onSubmit={handleSubmit}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={cita.mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={handleChange}
          value={cita.propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={cita.fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={cita.hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={cita.sintomas}
        >
        </textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  addCita: PropTypes.func.isRequired
}

export default Formulario;
