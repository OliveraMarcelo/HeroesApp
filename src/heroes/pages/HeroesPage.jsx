import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";
export const HeroesPage = () => {
  const { id } = useParams()
  
  const hero = useMemo(()=> getHeroById(id), [id])
  const navigate = useNavigate()
  console.log(hero);
  /* 
  vamos a usar el useMemo porque  ?
  cuando tenemos un cambio de state
  hay que memoriazar los valores
  sirve para que no se vuelva a redibujar nuevamente 
  
  para que nos sirve el useMemo ? 
  el useMemo se va disparar cada vez que su dependencia cambie, el callback
  wcual es la dependencia en nuestro caso ? el id
  cuando el id cambie la funcion se vuelve a disparar
  */
  const onNavigateBack = 
  ()=>{
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to={'/marvel'} />
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={`/assets/heroes/${hero.id}.jpg`} 
        alt= {hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>
              alter ego :
            </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
          <b>
              Publisher :
            </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
          <b>
              First appearance :
            </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">
    characters
        </h5>
        <p>
          {hero.characters}
        </p>
        <button
        className="btn btn-outline-primary"
        onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
