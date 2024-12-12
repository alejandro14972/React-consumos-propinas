import { formatoMoneda } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrdenContenProps = {
  orden: OrderItem[],
  eliminarItem: (item:MenuItem)=>void
}

export default function OrderContents({ orden, eliminarItem }: OrdenContenProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {orden.length === 0 ?
          <p className="text-3xl text-center">No hay pedidos</p>
          :
          (orden.map(item => (

            <div key={item.id}
              className="flex justify-between items-center border-t border-t-gray-200 py-5 last-of-type:border-b">
              <div>
                <p className="text-lg">{item.name} - {formatoMoneda(item.price)}</p>
                <p className="font-black">
                  Cantidad: {item.cantidad}
                </p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                      onClick={()=>eliminarItem(item)}
              >
                X
              </button>
            </div>

          ))
          )}

      </div>


    </div>
  )
}
