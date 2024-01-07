import { Navbar } from '../../ui/components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage } from '../pages/MarvelPage';
import { DCPage } from '../pages/DCPage';
import { SearchPage } from '../pages/SearchPage';
import { HeroesPage } from '../pages/HeroesPage';
export const HeroesRoute = () => {
  return (
    <>
    <Navbar />
    <Routes>
                <Route path="marvel" element={<MarvelPage />}></Route>
                <Route path="dc" element={<DCPage />}></Route>
                <Route path="search" element={<SearchPage />}></Route>
                {/* aca estamos utilizando hero:id para poder utilizar rutas dinamicas  */}
                <Route path="hero/:id" element={<HeroesPage/>}></Route>

                {/* to do : search for heroe by id  */}
                <Route path="/" element={<Navigate to="marvel" />}></Route>
            </Routes>
    </>
  )
}
