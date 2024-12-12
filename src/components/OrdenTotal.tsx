import { useMemo, useState, useEffect } from "react"
import { OrderItem } from "../types"
import { formatoMoneda } from "../helpers";

type OrdenTotalProps = {
    orden : OrderItem[]
}

export default function OrdenTotal({orden}:OrdenTotalProps) {

    //const subTotalSuma = useMemo(()=> orden.reduce((total, item)=> total + (item.price * item.cantidad), 0),[orden])
    const [precioTotal, setPrecioTotal] = useState(0);
    const total= ()=> orden.reduce((total, item)=> total + (item.price * item.cantidad), 0);

    useEffect(() => {
        setPrecioTotal(total());
    }, [orden]);

  return (
    <>
    <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y propina </h2>
        <p>
            Subtotal a pagar: {' '}
            <span className="font-bold">{formatoMoneda(precioTotal)}</span>
        </p>

        <p>
            Propina: {' '}
            <span className="font-bold">{}</span>
        </p>

        <p>
            Total a pagar: {' '}
            <span className="font-bold">$0</span>
        </p>
    </div>

    <button></button>
    </>
  )
}
