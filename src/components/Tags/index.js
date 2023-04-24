import style from './style.module.scss';

const Tags = () => {
    return (
        <div className={style.tags}>
            <p>Filtre por tags:</p>
            <ul className={style.tags__list}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}

export default Tags;