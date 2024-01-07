import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
   <>
    <div className="container">
    <h1>MarvelPage</h1>
    <HeroList publisher='Marvel Comics'/>
    </div>
   </>
  )
}
