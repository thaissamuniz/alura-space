import open from "./open.png";
import fav from "./favorito.png";

const Card = ({item, style}) => {
    return (
        <li className={style.galery__card}>
            <img
                className={style.galery__image}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={style.galery__descrip}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={open} alt="icone de expandir" />
                    <img src={fav} alt="ícone de coração ou favoritar" />
                </span>
            </div>
        </li>
    );
}

export default Card;