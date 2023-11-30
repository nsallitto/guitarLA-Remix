import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitarra } from "../models/guitarras.server"

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ]
}

export async function loader({ params }) {
  const { url } = params;
  const guitarra = await getGuitarra(url);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }

  return guitarra;
}

function GuitarrasUrl() {

  const {agregarCarrito} = useOutletContext();

  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debes seleccionar una Cantidad")
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada);
  }

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={`Imagen de la Guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            id="cantidad"
            onChange={ e => setCantidad(+e.target.value) }
          >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit" 
            value="Agregar al Carrito"
          />
        </form>
      </div>
    </div>
  )
}

export default GuitarrasUrl