import styles from './style.module.scss';
import Tags from "../Tags";
import Cards from './Cards';
import pics from './pics.json';
import { useState } from 'react';

const Galery = () => {
    const [itens, setItens] = useState(pics);
    const tags = [...new Set(pics.map(val => val.tag))];
    const picsFilter = (tag) => {
        const newPics = pics.filter(pic => pic.tag === tag);

        setItens(newPics)
    }


    return (
        <section className={styles.galery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} picsFilter={picsFilter} setItens={setItens}/>
            <Cards itens={itens} styles={styles} />
        </section>
    )
}

export default Galery;