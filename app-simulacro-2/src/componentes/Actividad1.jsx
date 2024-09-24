import persona from "../datos/persona";

export const Actividad1 = () => {
  const convertirPersona = () => {
    return {
      nombreCompleto: `${persona.nombre} ${persona.apellido}`,
      ubicacion: persona.ciudad,
    };
  };
  const newPersona = convertirPersona();
  return (
    <div id="1" className="tarjeta">
      <h3>
        Escribe una función que convierta este objeto en un nuevo objeto con las
        siguientes claves: nombreCompleto (contendrá nombre y apellido
        concatenados) y ubicacion (contendrá la ciudad).
      </h3>
      <p>Persona sin modificar:</p>
      <ul>
        <li>Nomnre:{persona.nombre}</li>
        <li>Apellido:{persona.apellido}</li>
        <li>Ciudad:{persona.ciudad}</li>
        <li>Edad:{persona.edad}</li>
      </ul>
      <p>Persona modificada:</p>
      <ul>
        <li>Nombre Completo:{newPersona.nombreCompleto}</li>
        <li>Ubicacion:{newPersona.ubicacion}</li>
      </ul>
    </div>
  );
};
