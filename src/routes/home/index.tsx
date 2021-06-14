import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import Search from '../../components/search/search'
import Favourites from '../../components/favourites/favourites';
import Pokemon from '../../components/pokemon/pokemon';
import { getShakespeareanDesc } from '../../services/pokeSearch.service';
import { PokeMon } from '../../models/Pokemon';
import { useState } from 'preact/hooks';
import { Status } from '../../models/State';
import { getFavouirtes, saveFavourites } from '../../services/cache.service';
const noFoundSvg = '../../assets/notfound.svg'
const Home: FunctionalComponent = () => {
    const favList: Array<PokeMon> = getFavouirtes()

    /** Hooks for Search State */
    const [searchState, setSearchState] = useState({ status: Status.DEFAULT, searchData: {} as PokeMon })
    const changeSearchState = (state: any) => setSearchState(state);

    /** Hooks for Favourites State */
    const [favourites, setFavourites] = useState(favList)
    const updateFav = (pokemon: PokeMon) => {
        const favIndex = favourites.findIndex((fav: PokeMon) => fav.id === pokemon.id);
        if (favIndex < 0) {
            favourites.push(pokemon)
        } else {
            favourites.splice(favIndex, 1)
        }
        setFavourites([...favourites])
        saveFavourites(favourites)
    }


    /**
     * 
     * A method to handle all states for the search box 
     */
    function showSearchResult() {
        const { status, searchData } = searchState
        switch (status) {
            case Status.DEFAULT: return '';
            case Status.FOUND:
                return searchData ? <Pokemon onChange={(pokemon: PokeMon) => handlePokeMonStateChange(pokemon)} pokeMon={searchData} /> : ''
            case Status.NOTFOUND: return (
                <div style={`  display: flex; margin:auto;padding: 20px;flex-direction:column;text-align:center;opacity: 0.60;
            }`}>
                    <img style={`  width: 25%;display: flex;justify-content: space-around;margin: auto;`} src={noFoundSvg} />
                    <p style={'padding:5px'}>Not found, Please try a different one</p>
                </div>
            )
        }
    }

    /**
     * Handles all the events from <Pokemon/> component.
     * Reset the search to 'DEFAULT' if the Pokemon is liked
     * @param pokemon 
     */
    function handlePokeMonStateChange(pokemon: PokeMon) {
        updateFav(pokemon)
        changeSearchState({ status: Status.DEFAULT })
    }

    /**
     * Handles all the changes from the <Favourites/> component
     * @param pokemon 
     */
    function onFavChange(pokemon: PokeMon) {
        updateFav(pokemon)
    }

    return (
        <div class={style.home}>
            <div class={style.mainLayout}>
                <div class={style.block1}>
                    <Search onSearch={(searchText: string) => searchPokeMon(searchText, changeSearchState)} />

                    <div class={style.searchResult}>
                        {showSearchResult()}
                    </div>
                </div>
                {renderFav(favourites, onFavChange)}
            </div>
        </div>
    );
};

/**
 * Method to dynamically render the <Favourites/> component if user has any pokemon in the list
 * @param favourites 
 * @param cb 
 * @returns 
 */
function renderFav(favourites: Array<PokeMon>, cb: any) {
    if (favourites.length > 0) {
        return (
            <div class={style.block2}>
                <Favourites onFavChange={cb} favList={favourites} />
            </div>
        )
    }
}


/**
 * Method for handling the PokeMon Search and Translation
 * @param searchText 
 * @param callback 
 */
async function searchPokeMon(searchText: string, callback: any) {
    console.log(searchText)
    try {
        const pokemon = await getShakespeareanDesc(searchText)
        console.log(pokemon.shakespeareanDes)
        callback({ status: Status.FOUND, searchData: pokemon })
    } catch (e) {
        callback({ status: Status.NOTFOUND })
        console.log('failed to fetch data');
    }


}

export default Home;
