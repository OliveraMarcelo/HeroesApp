import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroById = (id) => {
    /* vamos a regresar el heroe que coincida con el id que nos llega por parametro */
    return heroes.find(hero => hero.id === id)
}
