import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
export const CarritoApp = () => {
  return (
    //<div><h1>Aplicación de Carrito</h1> <hr /></div>
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="containter">
          <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
            <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
            <Route path="/*" element={<Navigate to={'/'} />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>

  )
}
