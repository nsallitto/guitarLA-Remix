import { Link } from "@remix-run/react";
import { formatearFecha } from "../utills/helpers";

function Post({ post }) {

    const { publishedAt, contenido, imagen, titulo, url } = post;
    
    return (
        <article className="post">
            <img src={imagen.data.attributes.formats.small.url} alt={`Imagen de blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post