import banner from './banner.png';
import styles from './style.module.scss';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais curtida do espaço</h1>
            <img src={banner} alt='A imagem da terra vista do espaço' />
        </div>
    )
}

export default Banner;