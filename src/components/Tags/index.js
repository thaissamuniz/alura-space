import style from './style.module.scss';
import pics from '../Galery/pics.json';

const Tags = ({tags, picsFilter, setItens}) => {
    return (
        <div className={style.tags}>
            <p>Filtre por tags:</p>
            <ul className={style.tags__list}>
                {
                    tags.map(tag => <li key={tag} onClick={() => picsFilter(tag)}>{tag}</li>)
                }
                <li onClick={() => setItens(pics)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags;