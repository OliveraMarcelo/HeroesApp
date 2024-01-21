import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string"
import { getHeroesByName } from "../helpers/getHeroByName";
export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  //como luce mi formulario? eso debo colocar en mi hook
  /* 
 un ejemplo de los que no devuelve location
  {
    "pathname": "/search",
    "search": "?q=superman",
    "hash": "",
    "state": null,
    "key": "dbvk75ix"
}

  console.log({query});
vemos que 
{
    "query": {
        "q": "superman"
    }
}
nos da un objetoen donde podemos tener los parametros que utilizamos en la querystring
  */

  const {searchText,onInputChange} = useForm({
    searchText : ''
  })

  const {q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)
  const showSearch = (q == '')
  const showError =  (q != '' && heroes.length == 0)
  const onSearchSubmit = (event )=>{
    event.preventDefault()
    if(searchText.trim().length <= 1) return 
    //aplicamos que se vea el texto en la query parameters
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    console.log({searchText});
  }
  return (
    <>
      <h1>Search</h1>
     <div className="row">
     <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Buscador"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            className="form-control"
          />
        </form>
        <button type="button" className="btn btn-outline-primary mt-1">Buscar</button>
      </div>
      <div className="col-7">
        <h4>results</h4>
        <hr />
        {
          showSearch ? <div className="alert alert-primary">
          Buscar un heroe
        </div> :showError && <div className="alert alert-danger">
          No hay un heroe <b>{q}</b>
        </div> 
        }

        
        
      </div>
      <hr />
      {heroes.map(hero=>(
          <HeroCard key={hero.id} {...hero}/>
        ))}
     </div>
    </>
  );
};
