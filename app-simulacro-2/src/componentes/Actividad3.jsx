import { empleados } from "../datos/empleados";

export const Actividad3 = () => {
  let sueldosMayores = [];
  const sueldoMayora4800 = () => {
    return empleados.filter((empleado) => empleado.sueldo > 48000);
  };
  sueldosMayores = sueldoMayora4800();
  return (
    <div id="3" className="tarjeta">
      <p>
        Actividad 3 Escribe una función que recorra el array y devuelva un nuevo
        array con los nombres de los empleados cuyo sueldo sea mayor a 48000.
      </p>
      <h3>Dado el siguiente arreglo:</h3>
      {empleados.map((empleado) => (
        <ul key={empleado.nombre}>
          <li>Nombre:{empleado.nombre}</li>
          <li>Puesto:{empleado.puesto}</li>
          <li>Sueldo:{empleado.sueldo}</li>
        </ul>
      ))}
      <h3>Empleados filtrados por salario mayor a 48000</h3>
      {sueldosMayores.map((empleado) => (
        <ul key={empleado.nombre}>
          <li>Nombre:{empleado.nombre}</li>
          <li>Puesto:{empleado.puesto}</li>
          <li>Sueldo:{empleado.sueldo}</li>
        </ul>
      ))}
    </div>
  );
};
