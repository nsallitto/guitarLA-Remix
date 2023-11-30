import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server";
import { formatearFecha } from "../utills/helpers";

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}` }
  ]
}

export async function loader({ params }) {
  const { url } = params;
  const post = await getPost(url);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    })
  }
  return post
}

function Post() {

  const post = useLoaderData();
  const { contenido, imagen, titulo, publishedAt } = post.data[0].attributes
  return (
    <article className="post mt-3">
      <img src={imagen.data.attributes.formats.small.url} alt={`Imagen de blog ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post;