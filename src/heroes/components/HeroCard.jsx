import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearence, characters }) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    // se puede guardar en una variable el jsx 
    const charactersbyActor  = <p>{characters}</p>
    const CharactersByHero = ({alter_ego,characters}) => {
        if ((alter_ego == characters)) return <></>
        return  <p>{characters}</p>    
        
        
    }
    return (
        <div className='col-6 col-md-4 col-sm-6 animate__animated animate__fadeIn'>
            <div className='card '>
                <div className='row no-gutters '>
                    <div className='col-4 ' >
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8 ">
                        <div className="card-body ">
                        <h5 className="card-title ">
                            {superhero}
                        </h5>
                        <p className="card-text ">
                            {alter_ego}
                        </p>
                        
                        <CharactersByHero
                        characters ={characters}
                        alter_ego = { alter_ego} 
                        />
                        
                        
                        </div>
                        <p>
                            <small className="text-muted">
                            {first_appearence}
                            </small>
                        </p>
                        {/* le mandamos el id  para redireccionar a una ruta como esa*/}
                        <Link to={`/hero/${id}`}>
                        mas ...
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
