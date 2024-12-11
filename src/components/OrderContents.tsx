import { OrderItem } from "../types"

type OrdenContenProps ={
  orden:OrderItem[]
}

export default function OrderContents({orden}:OrdenContenProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {orden.length ===0 ?
            <p className="text-3xl text-center">No hay pedidos</p> 
            :
            (orden.map(item => (
           
          <div key={item.id}>
            <p>{item.name} - {item.price}</p>
          </div>     
        
            ))
          )}

        </div>


    </div>
  )
}
