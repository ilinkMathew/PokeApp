import { FunctionalComponent, h } from 'preact';
import style from './style.css';
const logoSvg = '../../assets/logo.svg'
const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <div class={style.logoContainer}>
                <div class={style.logo}>
                    <img src={logoSvg} />
                </div>
            </div>
        </header>
    );
};

export default Header;
