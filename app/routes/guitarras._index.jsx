import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import ListadoGuitarras from "../components/listadoGuitarras"

export function meta() {
    return [
        {
            title: "GuitarLA - Tienda",
            description: "GuitarLa - Nuestra Coleccion de Guitarras"
        }
    ]
}

export async function loader() {
    const guitarras = await getGuitarras();
    return guitarras.data;
}

export default function Tienda() {
    const guitarras = useLoaderData();
    return (
        <ListadoGuitarras
            guitarras={guitarras}
        />
    )
}
