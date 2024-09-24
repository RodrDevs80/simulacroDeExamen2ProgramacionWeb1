import { useState } from "react";
import { estudiante } from "../datos/estudiante";

export const Actividad2 = () => {
  const estudianteModificado = { ...estudiante };
  const [nota, setNota] = useState("");
  const [elEstudiante, setElEstudiante] = useState({});
  const cambiarPromedio = () => {
    if (nota < 1 || nota > 10) {
      alert("Ingrese una nota valida\nDebe ser un numero entre 1 y 10");
    } else {
      for (const propiedad in estudianteModificado) {
        if (propiedad === "cantNotas") {
          estudianteModificado[propiedad] += 1;
        }
        if (propiedad === "promedio") {
          estudianteModificado[propiedad] = (
            estudianteModificado[propiedad] +
            nota / estudianteModificado["cantNotas"]
          ).toFixed(2);
        }
      }
      setElEstudiante(estudianteModificado);
    }
  };
  return (
    <div id="2" className="tarjeta">
      <p>
        Escribe una función que reciba una nueva nota, actualize el promedio del
        estudiante y devuelva el objeto actualizado
      </p>
      <input
        value={nota}
        type="number"
        onChange={(e) => setNota(e.target.value)}
      />
      <button onClick={cambiarPromedio}>Ingresar Nueva Nota</button>
      <h3>Promedio Anterior</h3>
      <p>{estudiante.promedio}</p>
      <h3>Promedio Nuevo</h3>
      <p>{elEstudiante.promedio}</p>
    </div>
  );
};
