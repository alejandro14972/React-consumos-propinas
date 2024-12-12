import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatoMoneda } from "../helpers";

type OrdenTotalProps = {
  orden: OrderItem[];
  propina: number;
};

export default function OrdenTotal({ orden, propina }: OrdenTotalProps) {
  // Cálculo del subtotal
  const precioTotal = useMemo(
    () => orden.reduce((total, item) => total + item.price * item.cantidad, 0),
    [orden]
  );

  // Cálculo de la propina
  const calculoPropina = useMemo(() => precioTotal * propina, [precioTotal, propina]);

  // Cálculo del total a pagar
  const totalPagar = useMemo(() => precioTotal + calculoPropina, [precioTotal, calculoPropina]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatoMoneda(precioTotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatoMoneda(calculoPropina)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatoMoneda(totalPagar)}</span>
        </p>
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Confirmar Pago
      </button>
    </>
  );
}
