import { pedido } from "../datos/pedido";

export const Actividad5 = () => {
  const personaJSON = JSON.stringify(pedido); //pasar a un string el objeto;
  const procesarPedido = (p) => {
    return {
      cliente: p.cliente,
      estadoGeneral: p.entregados.some((paquete) => paquete === false)
        ? "Pendiente"
        : "Entregado",
      totalDeLosPedidos: p.precios.reduce((total, precio) => total + precio, 0),
    };
  };
  const pedidoModificado = procesarPedido(pedido);
  return (
    <div id="5" className="tarjeta">
      Actividad5
      <p>
        Escribe una función que procese este objeto y devuelva un nuevo objeto
        con los siguientes datos:
      </p>
      <h3
        style={{
          color: "green",
          background: "orangered",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {personaJSON}
      </h3>
      <ol>
        <li>cliente: Nombre del cliente</li>
        <li>
          estadoGeneral: <strong>Entregado</strong> si todos los productos han
          sido entregados, o <strong>Pendiente</strong> si hay al menos un
          producto sin entregar.
        </li>
        <li>Total: Calcular el total de $ del pedido.</li>
      </ol>
      <hr />
      <h3>NUEVO OBJETO</h3>
      <ol
        style={{
          color: "white",
          background: "blue",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <li>Cliente:{pedidoModificado.cliente}</li>
        <li>Estado General:{pedidoModificado.estadoGeneral}</li>
        <li>Total de las compras: $ {pedidoModificado.totalDeLosPedidos}</li>
      </ol>
    </div>
  );
};
