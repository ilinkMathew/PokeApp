import { ComponentProps, FunctionalComponent, h } from "preact";
import { PokeMon } from "../../models/Pokemon";
import Like from "../like/like";

import style from './style.css';

export interface PokemonProps extends ComponentProps<any> {
    pokeMon: PokeMon,
    onChange: any
}
const Pokemon: FunctionalComponent<PokemonProps> = (props: PokemonProps) => {
    function onChange(likeState: boolean, props: PokemonProps) {
        const { pokeMon } = props;
        pokeMon.isFavourite = likeState;
        props.onChange(pokeMon)
    }
    return (
        <div class={style.container}>
            <div class={style.header}>
                <h4>{props.pokeMon.name}</h4>
                <div>
                    <Like onChange={(likeState: boolean) => onChange(likeState, props)} isfav={props.pokeMon.isFavourite} />
                </div>
            </div>
            <p class={style.body} >
                {props.pokeMon.shakespeareanDes}
            </p>
        </div>
    )
}

export default Pokemon;