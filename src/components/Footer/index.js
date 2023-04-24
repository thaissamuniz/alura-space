import style from './style.module.scss';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import instagramIcon from './instagram.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.footer__medias}>
                <li>
                    <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                        <img src={facebookIcon} alt='facebook' />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                        <img src={twitterIcon} alt='twitter' />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                        <img src={instagramIcon} alt='instagram' />
                    </a>
                </li>
            </ul>
            <p className={style.footer__p}>Desenvolvido por thaissa</p>
        </footer>
    )
}

export default Footer;