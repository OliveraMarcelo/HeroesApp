import { getHeroesByPublysher } from "../helpers/getHeroesByPublisher";
import PropTypes from 'prop-types'; 
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {
    let heroes = getHeroesByPublysher(publisher);
  return (
     <div  className="row rows-cols-1 row-cols-md-3 g-3 ">
        {heroes.map(hero =>
            <HeroCard key={hero.id} {...hero}/>
        )
        }
    </div>
   
  )
}
HeroList.PropTypes = {
    publisher: PropTypes.string
}