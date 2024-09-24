import { empleados } from "../datos/empleadosActividad4";

export const Actividad4 = () => {
  const PORCENTAJE = 1.1; //equivale al 10%
  return (
    <div id="4" className="tarjeta">
      Actividad4
      <p>
        Escribe una función que reciba este array y aumente el sueldo de cada
        empleado (que este activo) en un 10%. Devuelve el array actualizado
      </p>
      <h3>Todos los empleados</h3>
      {empleados.map((empleado) => (
        <ul key={empleado.nombre}>
          <li>{empleado.nombre}</li>
          <li>{empleado.puesto}</li>
          <li>{empleado.sueldo}</li>
          <li
            style={
              !empleado.activo
                ? { background: "red", borderRadius: "10px", color: "white" }
                : { background: "blue", borderRadius: "10px", color: "white" }
            }
          >
            {empleado.activo ? "Activo" : "Inactivo"}
          </li>
        </ul>
      ))}
      <h3>Empleados Activos con un 10% de aumento de sueldo</h3>
      {empleados
        .filter((empleado) => empleado.activo === true)
        .map((empleado) => (
          <ul key={empleado.nombre}>
            <li>{empleado.nombre}</li>
            <li>{empleado.puesto}</li>
            <li>{(empleado.sueldo * PORCENTAJE).toFixed()}</li>
          </ul>
        ))}
    </div>
  );
};
