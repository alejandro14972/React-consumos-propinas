import MenuItem from "./components/menuItem"
import OrderContents from "./components/OrderContents";
import OrdenTotal from "./components/OrdenTotal";
import PropinaPorcentaje from "./components/PropinaPorcentaje";
import { menuItems } from "./data/db"
import userOrder from "./hooks/useOrder"


function App() {


  const { orden, propina, setPropina, addItem, eliminarItem, guardarOrden } = userOrder();


  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

      {orden.length >0?(
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            orden={orden}
            eliminarItem={eliminarItem}
          />

          <PropinaPorcentaje
            setPropina={setPropina}
            propina={propina}
          />

          <OrdenTotal
            orden={orden}
            propina={propina}
            guardarOrden={guardarOrden}
          />
        </div>

      ):
      <p className="text-3xl text-center">No hay pedidos</p>
    }
      </main>

    </>
  )
}

export default App
