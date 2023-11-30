import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta() { //SOLO FUNCIONA EN ROUTES Y NO EN COMPONENTES
  return[
    {
      title:"GuitarLA - Nosotros",
      description:"Venta de guitarras, blog de musica"
    }
  ]
}
export function links() { //SOLO FUNCIONA EN ROUTES Y NO EN COMPONENTES
  return [
    {
      rel:"stylesheet",
      href:styles
    },
    {
      rel:"preload",
      href:imagen,
      as:"image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />
        <div>
          <p>Sed et gravida ex, nec malesuada sem. Morbi iaculis in risus in molestie. Nunc tincidunt dui a ipsum varius, vel imperdiet augue 
            ultricies. Duis ultricies, justo at tincidunt vestibulum, odio justo pulvinar massa, eu iaculis velit dolor vitae est.
             In metus eros, lacinia vitae pretium sollicitudin, faucibus sed ex. Cras vitae lobortis massa. Etiam pretium massa sem, vel d
             ictum enim ullamcorper hendrerit. Aliquam aliquet, felis eget malesuada pharetra, lacus diam sollicitudin orci, sed aliquet ante 
             ante in massa. Proin mollis ipsum nibh. Fusce in gravida ante, vitae tempus mauris.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros