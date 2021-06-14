import { ComponentProps, FunctionalComponent, h } from "preact";
import style from './style.css';
import { useState } from 'preact/hooks';
export interface LikeProps extends ComponentProps<any> {
    isfav: boolean;
    onChange?: any;
}
const Like: FunctionalComponent<LikeProps> = (props: LikeProps) => {
    const [likeState, setLikeState] = useState(props.isfav);
    const updateLikeState = (state: boolean) => {
        props.onChange(state);
        setLikeState(state)
    }
    const activeClassName = likeState ? style.active : ''
    return (
        <button id="like-button" className={style.likeButton + " " + activeClassName}
            onClick={() => updateLikeState(!likeState)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </button>
    )
}
export default Like