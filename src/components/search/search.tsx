import { ComponentProps, FunctionalComponent, h } from "preact";
export interface SearchProps extends ComponentProps<any> {
    onSearch: any
}
import style from './style.css'

const Search: FunctionalComponent<SearchProps> = (props: SearchProps) => {
    return (
        <div class={style.container}>
            <form onSubmit={(event) => searchPokemon(event, props)} id="search-form">
                <div class={style.searchBox} >
                    <input type="text" placeholder="Search Pokemon" name="search-field" class={style.searchField} />
                    <input type="submit" value="GO" class={style.searchButton} id="searchButton" />
                </div>
            </form>
        </div>
    )

}

function resetForm() {
    const form = document.getElementById('search-form') as HTMLFormElement;
    form.reset();
}

function searchPokemon(event: any, props: SearchProps) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchText = formData.get('search-field') || '';
    resetForm();
    props.onSearch(searchText.toString().toLowerCase())
}

export default Search;