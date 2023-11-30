import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import { getCurso } from "../models/cursos.server"
import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Curso from "../components/curso"
import stylesGuitarras from "../styles/guitarras.css"
import stylesPosts from "../styles/blog.css"
import stylesCurso from "../styles/curso.css"

// export function meta() {
//   return [];
// }

export function links() {
  return [
    {
      rel:"stylesheet",
      href: stylesGuitarras
    },
    {
      rel:"stylesheet",
      href: stylesPosts
    },
    {
      rel:"stylesheet",
      href:stylesCurso
    }
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  // const guitarras = await getGuitarras(); --------------CON PROMISE ALL NO ESPERAMOS A QUE SE EJECUTE UNA Y DESP OTRA.
  // const posts = await getPosts(); 
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index