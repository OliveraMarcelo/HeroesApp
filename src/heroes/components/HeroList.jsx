import { getHeroesByPublysher } from "../helpers/getHeroesByPublisher";
import PropTypes from 'prop-types'; 


export const HeroList = ({publisher}) => {
    let heroes = getHeroesByPublysher(publisher);
  return (
    <>
    <h3>Heroes de dc</h3>
     <ul >
        {heroes.map(hero =>
            <li key={hero.id}>
                {hero.superhero}
            </li>
        )
        }
    </ul>
    </>
   
  )
}
HeroList.PropTypes = {
    publisher: PropTypes.string
}