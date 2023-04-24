import styles from './style.module.scss';
import icons from './icons.json';
import Icon from './Icon';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                {icons.map(icon => (<Icon key={icon.id} icon={icon}  style={styles}/>))}
            </ul>
        </nav>
    )
}

export default Menu;