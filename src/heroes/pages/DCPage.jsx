import { HeroList } from "../components/HeroList"

export const DCPage = () => {
  return (
  <>
    <div className="container">
    <h1>DC Comics</h1>
    <hr />
    <HeroList publisher='DC Comics'/>
    </div>
  </>

  )
}
