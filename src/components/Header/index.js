import logo from './logo.png';
import search from './search.png';
import styles from './style.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"/>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você está procurando?"/>
                <img src={search} alt="icone lupa"/>
            </div>
        </header>
    )
}

export default Header;