import { HeroCard } from "../components/HeroCard";
export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>
     <div className="row">
     <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form action="">
          <input
            type="text"
            placeholder="Buscador"
            name="searchText"
            className="form-control"
          />
        </form>
        <button type="button" className="btn btn-outline-primary mt-1">Buscar</button>
      </div>
      <div className="col-7">
        <h4>results</h4>
        <hr />
        <div className="alert alert-primary">
          Buscar un heroe
        </div>
        <div className="alert alert-danger">
          No hay un heroe <b>abc</b>
        </div>
        <HeroCard></HeroCard>
      </div>
      <hr />
     </div>
    </>
  );
};
