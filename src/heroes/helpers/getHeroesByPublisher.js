import { heroes } from "../data/heroes";
export const getHeroesByPublysher =(publisher)=>
{

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error('Invalid publisher' + publisher);
    }
    console.log('saving');
    return heroes.filter(heroe=> heroe.publisher == publisher);
}