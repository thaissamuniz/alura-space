import home from '../../assets/icons/home-ativo.png';
import moreLikes from '../../assets/icons/mais-curtidas-inativo.png';
import mostViewd from '../../assets/icons/mais-vistas-inativo.png';
import news from '../../assets/icons/novas-inativo.png';
import surpriseMe from '../../assets/icons/surpreenda-me-inativo.png';
import styles from './style.module.scss';

const menuItens = [
    { item: 'Início', icon: home },
    { item: 'Mais Curtidas', icon: moreLikes },
    { item: 'Mais Vistas', icon: mostViewd },
    { item: 'Novas', icon: news },
    { item: 'Surpreenda-me', icon: surpriseMe }
]
const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                {menuItens.map(menuItem => <li className={styles.menu__item} key={menuItem.item}><img src={menuItem.icon} alt={menuItem.item} /><a href='/'>{menuItem.item}</a></li>)}
            </ul>
        </nav>
    )
}

export default Menu;