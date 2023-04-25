import styles from './style.module.scss';
import popularPics from './populas-pics.json';

const Popular = () => {
    return (
        <aside className={styles.popular}>
            <h2>Populares</h2>
            <ul className={styles.popular__images}>
                {popularPics.map(popularPic => <li key={popularPic.id}><img src={popularPic.path} alt={popularPic.alt}/></li>)}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}

export default Popular;