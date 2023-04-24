import styles from './style.module.scss';
import Tags from "../Tags";
import fotos from './pics.json';
import open from './open.png';
import fav from './favorito.png';

const Galery = () => {
    return (
        <section className={styles.galery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galery__cards}>
                {fotos.map(pic => {
                    return (
                        <li key={pic.id} className={styles.galery__card}>
                            <img className={styles.galery__image} src={pic.imagem} alt={pic.titulo} />
                            <p className={styles.galery__descrip}>{pic.titulo}</p>
                            <div>
                                <p>{pic.creditos}</p>
                                <span>
                                    <img src={fav} alt='icone coração de curtir' />
                                    <img src={open} alt='icone de abrir modal' />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default Galery;