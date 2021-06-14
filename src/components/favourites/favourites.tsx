import { ComponentProps, FunctionalComponent, h, Fragment } from "preact";
import { PokeMon } from "../../models/Pokemon";
import Pokemon from '../pokemon/pokemon'
import style from './style.css'
export interface FavouritesProp extends ComponentProps<any> {
    favList: Array<PokeMon>;
    onFavChange: any
}
const Favourites: FunctionalComponent<FavouritesProp> = (props: FavouritesProp) => {
    return (
        <div class={style.favouritesContainer}>
            <div class={style.header}>
                <h3>Favourites ({props.favList.length})</h3>
            </div>
            {
                props.favList.map(pokemon => (
                    <Fragment key={pokemon.id} >
                        <div class={style.pokemon}>
                            <Pokemon onChange={() => updateFav(pokemon, props)} pokeMon={pokemon} />
                        </div>
                    </Fragment>
                ))
            }
        </div>

    )
}


function updateFav(pokemon: PokeMon, props: FavouritesProp) {
    props.onFavChange(pokemon)
}

export default Favourites;